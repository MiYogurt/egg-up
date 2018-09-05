// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import PhotoMetadata from '../../../app/model/photo-metadata';
import Photo from '../../../app/model/photo';

declare module 'egg' {
  interface IModel {
    PhotoMetadata: ReturnType<typeof PhotoMetadata>;
    Photo: ReturnType<typeof Photo>;
  }
}
