/**
 * 使用koa-static中间件对静态资源进行管理
 */
const Koa = require('koa'),
    path = require('path'),
    fs = require('fs');
    static = require('koa-static');

const app = new Koa(),
    staticPath = './static';

// 使用静态资源中间件设置好路径==>此时可以再地址栏访问localhost:3000/1.jpg即可
app.use(static(path.join(__dirname,staticPath)));

app.use(async(ctx)=>{
    // 在404.html中也使用配置的路径进行引用静态文件
    let html = await render('404.html');
    ctx.body = html;
}).listen(3000,()=>{
    console.log("OK");
})

function render(page){
    return new Promise((resolve,reject)=>{
        let pageUrl = `./page/${page}`; // ``中使用${value}来获取变量
        fs.readFile(pageUrl,"binary",(err,data)=>{ //根据路径读取文件
            if(err)
                reject(err);
            else
                resolve(data);
        })
    })
}