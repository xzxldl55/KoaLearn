const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

/**
 * Koa-router 传递参数==>使用koa原生的get/post的方法接收，（get.js、post.js）
 */

router.get('/',function (ctx,next){
    ctx.body = ctx.query;
})

app.use(router.routes()).use(router.allowedMethods()).listen(3000,()=>{
    console.log("OK!");
})

