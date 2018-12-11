const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

/**
 * 使用ctx.request.url获取路径
 * 原生Koa设置路由与node一样都要使用fs来读取文件，根据路由的路径读取然后再返回给页面进行渲染
 */
app.use(async(ctx)=>{
    let url = ctx.request.url;
    let html = await router(url);
    ctx.body = html;
}).listen(3000,()=>{
    console.log("Ready to work!")
})

// 渲染函数==>返回html页面
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

// 路由设置
async function router(url){
    let page = `404.html`;
    switch(url){
        case "/":
            page = `index.html`;
            break;
        case "/index":
            page = `index.html`;
            break;
        case "/todo":
            page = `todo.html`;
            break;
        default:
            page = `404.html`;
            break;
    }
    let html = await render(page);
    return html;
}