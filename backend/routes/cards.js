

const express = require('express');
const {getCardById,postCard,deleteCardById} = require('../controllers/cardsController'); 
const cardsRouter = express.Router();

//localhost:8000/api/highline/  前缀从外部引入,所以这里只要 '/'

//GET get card by id   /api/cards?id=1  查询参数
cardsRouter.get('/',getCardById);

//POST post a card   /api/cards
cardsRouter.post('/',postCard);


//DELETE delete cards by id   /api/cards/:card_id   
//delete 一般用动态参数
cardsRouter.delete('/:card_id',deleteCardById);



module.exports = cardsRouter;