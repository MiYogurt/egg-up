import * as errorCode from '../../config/error_code';
import {Context} from 'egg';

export default {
  get errorCode() {
    return errorCode;
  },
  ok(this: Context, body: any) {
    this.body = this.errorCode.Ok(body);
  },
  error(this: Context,name: string) {
    this.body = this.errorCode[name];
  }
};