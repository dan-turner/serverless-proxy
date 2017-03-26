import Koa from 'koa';
import Router from 'koa-router';

const router = new Router();

router.get('/', ctx => {
  ctx.status = 200;
  ctx.body = {
    hello: "world",
  };
});

router.get('/test', ctx => {
  ctx.status = 200;
  ctx.body = {
    testing: 123,
  };
});

const app = new Koa();
app
  .use(router.routes())
  .use(router.allowedMethods());

export default app;
