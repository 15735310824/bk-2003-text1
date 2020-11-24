// 1.导入模块
const express = require('express');

// 2.创建web实例
const app = express();


// 3.绑定监听事件request
app.get('/',(req,res)=>{
    res.send('hellow world');
})
app.get('/html5',(req,res)=>{
    res.send('2003');
})
app.post('/post',(req,res)=>{
    res.send('post方式');
})

// 4.启动服务
app.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080')
})