const messageRouter = require('express').Router();
const {sendMessage , allMessages} = require('../controllers/message');
const auth = require('../middlewares/auth');

messageRouter.get("/:chatId",auth,allMessages);
messageRouter.post('/',auth,sendMessage);

module.exports = messageRouter;