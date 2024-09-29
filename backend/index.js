//npm init
//npm i axios cors express json-server
//npm i nodemon concurrently -D

//导入框架
const express = require('express');
//导入模块
const cors = require('cors');
//导入模块
const router = require('./routes/index');
//导入ERROR MIDDLEWARE
const {handleErrors} = require('./controllers/middleware/errorMiddleware');
//创建新的实例
const app = express();

//这个是中间件
app.use(cors());
//没有这条,可以接收,但是无法读取,解析
app.use(express.json());

//这个是路由
app.use('/api', router);

//call api 之后, 调用handle error middleware
app.use(handleErrors);

const PORT = 80;
app.listen(PORT, function(){
    console.log('Server is running on http://localhost');
});