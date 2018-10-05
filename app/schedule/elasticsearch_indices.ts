import { Subscription } from 'egg';
import { Client } from 'elasticsearch';
import Photo from '@model/photo';

class Elasticsearch extends Subscription {
  private client: Client;
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      // interval: '0 0 0 * * *', // 0点执行
      interval: '10s', // 1 分钟间隔
      type: 'worker'
    };
  }

  constructor(ctx) {
    super(ctx);
    const { app } = this;
    this.client = app.elasticsearch;
  }

  async existsIndices() {
    return await this.client.indices.exists({ index: 'egg_up' });
  }

  createIndices() {
    return this.client.indices.create({
      index: 'egg_up',
      body: {
        settings: {
          number_of_shards: 1
        },
        mappings: {
          _doc: {
            properties: {
              description: {
                type: 'text',
                analyzer: 'ik_max_word',
                search_analyzer: 'ik_max_word'
              }
            }
          }
        }
      }
    });
  }

  async queryFromDB(){
    const allNumber = await Photo.count();
    const page = Math.ceil(allNumber / 10);
    for (let i = 0; i <= page; i++) {
      const photos = await Photo.find({
        skip: i * 10,
        take: 10
      });
      if (photos.length == 0) {
        return
      }
      try {
        await this.syncData(photos);
      } catch (error) {
        this.app.logger.error(error);
      }
    }
  }

  async syncData(photos: Photo[]){
    return Promise.all(photos.map(photo => this.client.index({
      body: photo,
      index: 'egg_up',
      id: photo.id.toString(),
      version: Date.now(), // 自行用 updatedAt 替代
      versionType: 'external_gte',
      type: '_doc'
    })))
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    const { app } = this;
    if(!await this.existsIndices()) {
      console.log("create indices");
      await this.createIndices()
    }
    await this.queryFromDB()
  }
}

export default Elasticsearch;
