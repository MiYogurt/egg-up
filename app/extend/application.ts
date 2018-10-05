import * as path from 'path';
import { Application } from 'egg';
import * as elasticsearch from 'elasticsearch';

const CacheMap = new Map()

export default {
  loadModel(this: Application) {
    const modelDir = path.join(this.baseDir, 'app', 'model');
    const models: any[] = [];
    this.loader.loadToApp(modelDir, '_model_source', {
      caseStyle: 'upper',
      filter(model) {
        models.push(model);
        return false;
      }
    });
    return models;
  },
  get CacheMap(){
    return CacheMap;
  },
  get elasticsearch(this: Application): elasticsearch.Client{
    if (CacheMap.get('elasticsearch')) {
      return CacheMap.get('elasticsearch');
    }
    let instance = new elasticsearch.Client(this.config.elasticsearch)
    CacheMap.set('elasticsearch', instance);
    return instance
  }
};



