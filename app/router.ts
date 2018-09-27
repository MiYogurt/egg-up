import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, middleware } = app;
  const checkBySchemas = middleware.checkBySchemas;

  router.get('/', checkBySchemas('home'), controller.home.index);
  router.get('/add', controller.home.onetone);
};
