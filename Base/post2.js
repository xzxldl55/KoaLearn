const koa = require('koa');
const app = new koa();
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
        let pastData=await parsePostData(ctx);
         ctx.body=pastData;
    }else{
        ctx.body='<h1>404!</h1>';
    }
}).listen(3000,()=>{
    console.log("Ready to work!")
});

// 解析NOde原生POST参数
function parsePostData(ctx){
    return new Promise((resolve,reject)=>{
        try{
            let postData = "";//是一个HTTP请求字符串
            ctx.req.on('data',(data)=>{
                postData += data;
            });
            ctx.req.addListener('end',()=>{
                let parseData = parseQueryStr(postData);
                resolve(parseData); 
            })
        }catch(erro){
            reject(erro);
        }
    });
}
// 将POST字符串解析为JSON对象
function parseQueryStr(queryStr){
    let queryData = {},
        queryStrList = queryStr.split('&');
        console.log(queryStrList);
        for(let [index,queryStr] of queryStrList.entries()){
            let itemList = queryStr.split('=');
            console.log(itemList);
            queryData[itemList[0]] = decodeURIComponent(itemList[1]);
        }
        return queryData;
}