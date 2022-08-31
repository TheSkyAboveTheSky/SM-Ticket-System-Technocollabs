const chatRouter = require('express').Router();
const {accessChat , fetchChats} = require('../controllers/chat');
const auth = require('../middlewares/auth');

chatRouter.post('/',auth,accessChat);
chatRouter.get('/',auth,fetchChats);

module.exports = chatRouter;