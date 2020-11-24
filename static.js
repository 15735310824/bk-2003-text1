//1. 导入http 模块
const http = require("http");
const path = require('path');
const fs = require('fs');
// 2.创建web服务对象实例
const server = http.createServer();


// 3.绑定监听request请求
server.on('request',(req,res)=>{
    // 获取请求地址
    let pathname = req.url;
    // 对'/' 做处理
    pathname = pathname === '/' ? '/index.html':pathname;
    // 对 图标 做处理
    let filename = path.join(__dirname,'public',pathname);

    // 读取文件
    fs.readFile(filename,(err,data)=>{
        if(err){
            res.statusCode = 500;
            res.end('server interval error');
        }else{
            res.end(data);
        }
    })
})



// 4.启动服务
server.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
})