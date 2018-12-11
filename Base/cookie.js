/**
 * 使用cookie来保存登录状态，可以直接用ctx上下文来提取内容
 * ctx.cookies.get(name,[[options]]) ==>读取上下文请求的cookie
 * ctx.cookies.set(name,value,[options]) ==>写入cookie
 * 
 * ==>cookie 的options：
 * domian：写入cookie所在的域名
 * path：写入cookie所在的路径
 * maxAge：cookie最大有效时长
 * expires：cookie失效时间
 * httpOnly：是否只用http请求中获得
 * overwrite：是否允许重写
 */

 const Koa = require('koa');
 const app = new Koa();

app.use(async(ctx)=>{
    if(ctx.url === '/index'){
        ctx.cookies.set('MyName','xzxldl',{
            domain:'127.0.0.1',
            path:'/index',
            maxAge:1000*60*60*24,
            expires:new Date('2018-12-30'),
            httpOnly:false,
            overwrite:false
        });
        ctx.body = "cookie is writen!";
    }else{
        ctx.body = ctx.cookies.get('MyName');
    }
}).listen(3000,()=>{
    console.log("OK!");
})

