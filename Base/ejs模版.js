/**
 * 开发时使用模版棒子开发：
 * ①模板机制需要依靠中间件，选择koa-views
 * cnpm install --save koa-views
 * ②使用ejs模版引擎
 * npm install --save ejs
 * 
 * ==>安装完后，可创建一个模版目录来管理模版（创建目录views）
 */
const Koa = require('koa'),
    views = require('koa-views'),
    path = require('path');
const app = new Koa();

// 用中间件加载ejs模版引擎
app.use(views(path.join(__dirname,'./views'),{
    extension:'ejs'
})).use(async(ctx)=>{
    // 渲染模版，添加变量
    let title = 'xzxldl';
    await ctx.render('index',{ // render('模版名',{传入变量})
        title
    })
}).listen(3000,()=>{
    console.log("OK!")
})