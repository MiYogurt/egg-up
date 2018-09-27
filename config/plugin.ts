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
  }
};

export default plugin;
