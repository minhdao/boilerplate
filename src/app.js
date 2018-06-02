/**
 * App home
 */

// Load config
const render = require('./lib/render.js');
const _ = require('lodash');
const bodyParser = require('koa-bodyparser');
const Koa = require('koa');
const convert = require('koa-convert');
const KoaRouter = require('koa-router');

let app = new Koa();
let route = new KoaRouter();

app.use(render);

let appLogger = async (ctx, next) => {
  console.log('Log');
  console.log(ctx.header);
  await next();
};

let requestTime = async (ctx, next) => {
  ctx.requestTime = new Date();
  await next();
  console.log(`Request took: ${new Date() - ctx.requestTime} ms.`);
};

app.use(requestTime);
// app.use(appLogger);
app.use(bodyParser());

route.get('/', async function(ctx) {
  console.log('GET /');
  ctx.response.status = 200;
  ctx.response.body = 'Hello, world!';
});

app.use(route.routes());

module.exports.app = app;