import { Controller } from 'egg'
import Photo from "@model/photo";
import PhotoMetadata from '@model/photo-metadata'

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this
    let photo = new Photo()
    photo.name = 'Me and Bears'
    photo.description = 'I am near polar bears'
    photo.filename = 'photo-with-bears.jpg'
    photo.views = 1
    photo.isPublished = true
    ctx.body = await Photo.find()
  }

  /**
   * async onetone
   */
  public async onetone() {
    // create a photo
    let photo = new Photo()
    photo.name = 'Me and Bears'
    photo.description = 'I am near polar bears'
    photo.filename = 'photo-with-bears.jpg'
    photo.isPublished = true

    // create a photo metadata
    let metadata = new PhotoMetadata()
    metadata.height = 640
    metadata.width = 480
    metadata.compressed = true
    metadata.comment = 'cybershoot'
    metadata.orientation = 'portait'
    metadata.photo = photo
    await photo.save()
    await metadata.save()
  }
}
