const chatRouter = require('express').Router();
const {accessChat , fetchChats} = require('../controllers/chat');
const auth = require('../middlewares/auth');

// @URL : http://localhost:3001/chat  || @Function : Acces Tha Chat : Get the Chat or Create a new One|| @Method : POST || @Middlewares : need to be authentificated
chatRouter.post('/',auth,accessChat);
// @URL : http://localhost:3001/chat  || @Function : Get all the logged User's Chats || @Method : GET || @Middlewares : need to be authentificated
chatRouter.get('/',auth,fetchChats);

module.exports = chatRouter;