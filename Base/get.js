const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
    let url = ctx.url;

    /**
     * ctx.request:是Koa中的context经过封装的对象，使用起来非常直观
     * query:整理好的格式化数据
     * querystring:纯字符串数据
     */
    // 从request中获取GET
    let request = ctx.request,
        req_query = request.query;
        req_queryString = request.querystring;
    
    // 从上下文中直接获取
    let ctx_query = ctx.query,
        ctx_queryString = ctx.querystring;
    
    ctx.body = {
        url,
        req_query,
        req_queryString,
        ctx_query,
        ctx_queryString
    }
}).listen(3000,()=>{
    console.log("OK")
})