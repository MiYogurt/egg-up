import 'reflect-metadata'
import { Application } from 'egg'
import { createConnection } from 'typeorm'
import * as path from 'path'
export default function(app: Application) {
  app.beforeStart(async () => {
    const modelDir = path.join(app.baseDir, 'app', 'model')
    const models: any[] = []

    app.loader.loadToApp(modelDir, '_model_source', {
      caseStyle: 'upper',
      filter(model) {
        models.push(model)
        return false
      }
    })
    console.log(models)
    app.model = await createConnection({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      database: 'typeorm',
      port: 3306,
      entities: models,
      synchronize: true,
      logging: true
    })
  })
}
