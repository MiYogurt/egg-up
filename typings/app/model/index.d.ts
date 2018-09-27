// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import Photo from '../../../app/model/photo';
import PhotoMetadata from '../../../app/model/photo_metadata';

declare module 'egg' {
  interface IModel {
    Photo: ReturnType<typeof Photo>;
    PhotoMetadata: ReturnType<typeof PhotoMetadata>;
  }
}
