var express = require('express')
var app = express()

//设置跨域访问
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});
// 用户数据
var data = [

    {
        id:1,
        userName:'qiaofeng',
        pwd:'qiaofeng'
    },
    {
        id:2,
        userName:'xiaolongnv',
        pwd:'xiaolongnv'
    },
    {
        id:3,
        userName:'zhangsan',
        pwd:'zhangsan'
    }
]
// 登录接口
app.get('/login',function(req,res){
    // 获取参数
    var userName = req.query.userName
    var pwd = req.query.pwd
    for(let item of data){
        if(item.userName === userName && item.pwd === pwd){
            res.json({
                code:0,
                message:'success'
            })
            break;
        }
    }
    res.json({
        code:1,
        message:'用户名或密码错误'
    })
})

app.listen(2000,()=>{
    console.log('后端服务启动成功 端口号:2000')
})