const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
    ctx.body = "Hello Koa!";
}).listen(3000);
console.log("Koa starting...");