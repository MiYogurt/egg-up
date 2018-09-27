// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import PhotoMetadata from '../../../app/model/photo-metadata';
import Photo from '../../../app/model/photo';

declare module 'egg' {
  interface IModel {
    PhotoMetadata: ReturnType<typeof PhotoMetadata>;
    Photo: ReturnType<typeof Photo>;
  }
}
