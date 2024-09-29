const express = require('express');

const highlineRouter = require('./highline');
//1.导入message router
const messageRouter = require('./message');
const profileRouter = require('./profile');
const requestRouter = require('./request');
const cardsRouter = require('./cards');

//create router 这步结束以后去挂载相关的API
const router = express.Router();
router.use('/highline', highlineRouter);
//2.挂载这个汇总的中间件上
router.use('/message', messageRouter);
router.use('/profile', profileRouter);
router.use('/request', requestRouter);
router.use('/cards', cardsRouter);


module.exports = router;