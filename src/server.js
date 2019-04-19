const express = require('express')
const app = express()
const router = require('./api/routers')

app.use(express.static('./'))

let allowOrigin = ['http://localhost:8080','http://localhost:10086','http://www.taobao.com']

//  设置跨域资源共享CORS
app.use((req,res,next)=>{
    let origin = req.get('Origin');
    let idx = allowOrigin.indexOf(origin)
    if(idx>=0){
        res.setHeader('Access-Control-Allow-Origin',allowOrigin[idx]);
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    }
    
    // 跨域请求CORS中的预请求
    if(req.method == "OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else{
        next();
    }
})

app.use('/', router)

app.listen(8000, () => {
    console.log('server is running on port 8000 ~')
})
