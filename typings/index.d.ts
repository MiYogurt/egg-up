import { Application } from 'egg'
import { Connection } from 'typeorm'
declare module 'egg' {
  export interface Application {
    model: Connection
  }
}
