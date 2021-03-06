const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

/**
 * 使用router中间件简化路由，GET/POST都可以直接链式定义
 * 在定义router时可以赋予路径前缀new Router({prefix:'/home'})
 * 此时定义的路由自动会加上/home/xxx ==>这种做法是全局的
 */
router.get('/',function (ctx,next){
    ctx.body = "html";
}).get('/todo',function (ctx,next){
    ctx.body = "Todo Page";
});
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000,()=>{
    console.log("OK")
})

