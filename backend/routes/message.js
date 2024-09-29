
//1.导入express 模块
const express = require('express');

//2.导入controller 文件 这个{} 是因为有时候会存在多于1个function
const {getMessage} = require('../controllers/messageController');

//1.创建完message controller, 到这里创建message 自己的模块
const messageRouter = express.Router();

//3.将这个模块挂载到汇总的route 模块之后,挂载message 的api
//3.处理get请求的路由方法,访问api/message的get请求会执行getMessage函数
messageRouter.get('/',getMessage);


//1.导出这个模块
module.exports = messageRouter;