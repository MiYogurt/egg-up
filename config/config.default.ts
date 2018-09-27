import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import { ConnectionOptions } from 'typeorm';
import { ValidatorError } from './error_code';

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

// app special config scheme
export interface BizConfig {
  sourceUrl: string;
  typeorm:
    | {
        type: string;
        host: string;
        username: string;
        database: string;
        port: number;
        synchronize: boolean;
        logging: boolean;
      }
    | ConnectionOptions;
}

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig> & BizConfig;

  // app special config
  config.sourceUrl = `https://github.com/eggjs/examples/tree/master/${
    appInfo.name
  }`;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1536137073918_867';

  // add your config here
  config.middleware = [];

  config.typeorm = {
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    database: 'typeorm',
    port: 3306,
    synchronize: true,
    logging: true
  };

  config.validator = {
    open: 'zh-CN',
    languages: { 'zh-CN': { required: '%s 字段必填' } },
    async formatter(ctx, error) {
      ctx.type = 'json';
      ctx.status = 400;
      ctx.body = ValidatorError('参数校验错误', error);
    }
  };

  return config;
};
