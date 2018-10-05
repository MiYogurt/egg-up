import Photo from '@model/photo';
import PhotoMetadata from '@model/photo_metadata';
import TestService from '@service/test';
import { Controller } from 'egg';
import { lazyInject } from 'egg-aop';

export default class HomeController extends Controller {
  @lazyInject()
  private testService: TestService;

  /**
   * service
   */
  public async test() {
    const { ctx } = this;
    let str = await this.testService.sayHi('yes');
    console.log(str);
    ctx.ok(str);
  }

  public async index() {
    const { ctx } = this;
    let photo = new Photo();
    photo.name = 'Me and Bears';
    photo.description = 'I am near polar bears';
    photo.filename = 'photo-with-bears.jpg';
    photo.views = 1;
    photo.isPublished = true;
    ctx.ok(await Photo.find());
  }

  /**
   * async onetone
   */
  public async onetone() {
    // create a photo
    let photo = new Photo();
    photo.name = 'Me and Bears';
    photo.description = 'I am near polar bears';
    photo.filename = 'photo-with-bears.jpg';
    photo.isPublished = true;

    // create a photo metadata
    let metadata = new PhotoMetadata();
    metadata.height = 640;
    metadata.width = 480;
    metadata.compressed = true;
    metadata.comment = 'cybershoot';
    metadata.orientation = 'portait';
    metadata.photo = photo;
    await photo.save();
    this.ctx.ok(await metadata.save());
  }

  async query(){
    const {app,ctx} = this;
    const body = await app.elasticsearch.search({q: ctx.query.q, index:'egg_up', type: '_doc'})
    ctx.body = body
  }
}
