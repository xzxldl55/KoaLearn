const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();

/**
 * 非全局的前缀添加，在装载路由时添加前缀
 */

//  创建子路由
 let home = new Router();
 home.get('/xzxldl',async(ctx)=>{
     ctx.body = "Home xzxldl";
 }).get('/todo',async(ctx)=>{
    ctx.body = "Home todo";
 });

 let page = new Router();
 page.get('/xzxldl',async(ctx)=>{
     ctx.body = "Page xzxldl";
 }).get('/todo',async(ctx)=>{
     ctx.body = "Page todo";
 });

//  装载子路由
let router = new Router();
router.use('/home',home.routes(),home.allowedMethods());
router.use('/page',page.routes(),page.allowedMethods());
// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000,()=>{
    console.log("OK!");
});