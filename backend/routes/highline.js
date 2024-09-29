
//1.导入express 模块
const express = require('express');

//先写了controller 的function,导出,这里导入
//2.导入controller 文件 这个{} 是因为有时候会存在多于1个function
const {getHighline} = require('../controllers/highlineController'); 

//1.创建profile 的router
const highlineRouter = express.Router();

//localhost:8000/api/highline/  前缀从外部引入,所以这里只要 '/'
//2. 处理get请求的路由方法,访问api/highline的get请求会执行getHighline函数
highlineRouter.get('/',getHighline);

//这里导出了这个router, 要到总的router(index)去挂载
//1.导出这个模块
module.exports = highlineRouter;