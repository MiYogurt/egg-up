// 给路由添加验证同名规则
import { Context, Router } from 'egg';
import { Middleware } from 'koa-compose';
import is from '@sindresorhus/is';
import checkBySchemas from '@middleware/check_by_schemas';

export default function (router: Router) : Router {
    return new Proxy(router, {
        get(target: typeof router, name: string) {
            const maybeFn = target[name];
            if (is.function_(maybeFn)) {
                return (schemaName: string, url: string, ...middlewares: Middleware<Context>[]) => {
                    return maybeFn(schemaName, url, checkBySchemas(schemaName), ...middlewares);
                }
            }
            return maybeFn;
        }
    })
}