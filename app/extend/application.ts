import * as path from 'path';
import { Application } from 'egg';

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
  }
};



