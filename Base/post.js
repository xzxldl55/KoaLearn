const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{

    /**
     * ctx.req:为context提供的node原生HTTP情切对象，可以获取到比request更多内容
     * ctx.method:获取请求类型GET/POST
     */

    //  当请求是GET时（路由为/），让用户填写表单
    if(ctx.url == '/' && ctx.method == 'GET'){
        let html = `
            <h1>Koa2 request post demo</h1>
            <form method="POST"  action="/">
                <p>userName</p>
                <input name="userName" /> <br/>
                <p>age</p>
                <input name="age" /> <br/>
                <p>webSite</p>
                <input name='webSite' /><br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body = html;
    }else if(ctx.url == '/' && ctx.method == 'POST'){
        // 当请求为POST时（路由为/）
        ctx.body = "POST IT";
        console.log(ctx.req)
    }else{
        ctx.body = `<h1>404 Not Found!</h1>`;
    }
}).listen(3000,()=>{
    console.log("Ready to work!")
})