const Koa = require('koa');
const bodyParser = require('koa-bodyparser'); //可以直接使用ctx.request.body来获取POST请求了，这个中间件自动解析了。
const app = new Koa();

//使用中间件
app.use(bodyParser());

app.use(async(ctx)=>{
    if(ctx.url==='/' && ctx.method==='GET'){
        //显示表单页面
        let html=`
            <h1>Koa2 request POST</h1>
            <form method="POST" action="/">
                <p>userName</p>
                <input name="userName" /><br/>
                <p>age</p>
                <input name="age" /><br/>
                <p>website</p>
                <input name="webSite" /><br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body=html;
    }else if(ctx.url==='/' && ctx.method==='POST'){
         let postData= ctx.request.body; //使用中间件接受POST
         ctx.body=postData;
    }else{
        ctx.body='<h1>404!</h1>';
    }
}).listen(3000,()=>{
    console.log("Ready to work!")
})