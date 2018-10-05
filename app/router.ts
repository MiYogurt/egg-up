import { Application } from 'egg';
import ProxyRouter from '@framework/proxy_router';

export default (app: Application) => {
  const { controller, router, middleware } = app;
  const r = ProxyRouter(router)

  
  r.get('home','/', controller.home.index);
  router.get('/video/:path', controller.video.push)
  router.get('/query', controller.home.query)
  router.get('/add', controller.home.onetone);
  router.get('/test', controller.home.test);
};
