
//1. 导入 axios 模块
const axios = require('axios');

//2. 这个模块是一个 async await 获取 http 数据的function
//当用户发送请求到对应的url 的时候,会激活这个function
const getProfile = async function(req,res,next){
    try {
        const url = 'http://localhost:8000/profile';
        const response = await axios.get(url);
        res.status(200).json({
            msg: 'Get Profile succeed',
            data: response.data,
        });

    } catch (error){
        next(error)

    }
};

//1. 导出这个模块
//这里使用 {} 的原因是有时候可能会有多于1个function
module.exports = {getProfile}