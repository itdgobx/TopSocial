//1.导入axios http 模块
const axios = require("axios");

//2. 这个模块是一个 async await 获取 http 数据的function
//当用户发送请求到对应的url 的时候,会激活这个function
const getMessage = async function (req, res,next) {
    try {
        //json server 被挂载在8000 端口
        const url = "http://localhost:8000/message";
        const message = await axios.get(url);

        res.status(200).json({
            msg: "get message succeed",
            data: {
                message: message.data,
            },
        });
    } catch (error) {
        next(error);
    }
};

//1. 导出这个模块
//这里使用 {} 的原因是有时候可能会有多于1个function
module.exports = { getMessage };
