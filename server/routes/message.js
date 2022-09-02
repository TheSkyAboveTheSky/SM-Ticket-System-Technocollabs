const messageRouter = require('express').Router();
const {sendMessage , allMessages} = require('../controllers/message');
const auth = require('../middlewares/auth');

// @URL : http://localhost:3001/message/:chatId || @Function : Get Chat's Messages  || @Method : GET || @Middlewares : need to be authentificated
messageRouter.get("/:chatId",auth,allMessages);
// @URL : http://localhost:3001/message || @Function : Send a message || @Method : GET || @Middlewares : need to be authentificated
messageRouter.post('/',auth,sendMessage);

module.exports = messageRouter;