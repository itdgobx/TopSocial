
//1.导入express 模块
const express = require('express');

//2.导入request controller 文件 这个{} 是因为有时候会存在多于1个function
const {getRequest} = require('../controllers/requestController');

//1.创建request 的router
const requestRouter = express.Router();

//2. 处理get请求的路由方法,访问api/request的get请求会执行getRequest函数
requestRouter.get('/', getRequest);

//1.导出这个模块
module.exports = requestRouter;