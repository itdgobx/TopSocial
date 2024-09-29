
//1.导入express 模块
const express = require('express');

//2. 导入profile 的control function 先写{},后面路径写完了以后,前面的大括号里面会自动找到
const {getProfile} = require('../controllers/profileController')

//1.创建profile 的router
const profileRouter = express.Router();


//2. 2. 处理get请求的路由方法,访问api/profile的get请求会执行getProfile函数
profileRouter.get('/', getProfile);

//1.导出这个模块
module.exports = profileRouter;