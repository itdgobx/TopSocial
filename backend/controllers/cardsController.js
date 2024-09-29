
//1. 导入 axios 模块
const axios = require('axios');

const CARDS_API_URL = 'http://localhost:8000/cards';

//2. 这个模块是一个 async await 获取 http 数据的function
//当用户发送请求到对应的url 的时候,会激活这个function
const getCardById = async function(req,res,next){
    const id = req.query.id;
    if(!id){ //  如果请求里没有id
        return res.status(400).send('Id is required')
    }
    try{

        
        const response = await axios.get(`${CARDS_API_URL}?id=${id}`);
        const card = response.data;
        if(!card.length){  //如果card 是一个空array  0
            return res.status(404).json({
                msg:'Card not found'
            })
        }
        res.status(200).json({  //如果它不是一个空array
            msg:'get cards succeed',
            data:card
            })
    }catch(error){
        next(error)
    }
}

const postCard = async function(req,res,next){
    const newCard = req.body;
    if(Object.keys(newCard).length ===0){
        return res.status(400).send('Card is required');
    }
    try{
        await axios.post(CARDS_API_URL,newCard,{
            headers:{"Content-Type":"application/json"}
        });
        res.status(200).json({
            msg:'Card is created'
        })
    }catch(error){
        next(error)
    }

}


const deleteCardById = async function(req,res,next){
    //如果是 使用的是动态参数 会使用params
    const id = req.params.card_id;
    if(!id){
        return res.status(400).send('Id is required');
    }
    try{
        await axios.delete(`${CARDS_API_URL}/${id}`);
        res.status(200).json({
            msg:'Card is deleted'
        })
    }catch (error){
        next(error)
    }

}



//1. 导出这个模块
//这里使用 {} 的原因是有时候可能会有多于1个function
module.exports = {getCardById,postCard,deleteCardById}