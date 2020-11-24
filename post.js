//1. 导入模块
const http = require('http');
const querystring = require('querystring');
// 2.创建web对象实例
const server = http.createServer();


// 3.监听request请求
server.on('request',(req,res)=>{
    let arr = [];
     // 逐块接收数据
    req.on('data',buffer=>{
        arr.push(buffer);
    })
     // 接收完毕进一步处理
    req.on('end',()=>{
        let buffer = Buffer.concat(arr);
        let str = buffer.toString();
        console.log(querystring.parse(str));
    });
});

// 4.启动服务
server.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
})