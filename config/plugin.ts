import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },

  validator : {
    enable: true,
    package: 'egg-y-validator'
  },
  aop: {
    enable: true,
    package: 'egg-aop'
  }
};

export default plugin;
