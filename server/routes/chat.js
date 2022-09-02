const chatRouter = require('express').Router();
const {accessChat , fetchChats} = require('../controllers/chat');
const auth = require('../middlewares/auth');
const verifyRoles = require("../middlewares/verifyRoles");

// @URL : http://localhost:3001/chat  || @Function : Acces Tha Chat : Get the Chat or Create a new One|| @Method : POST || @Middlewares : need to be authentificated
chatRouter.post('/',auth,verifyRoles("2020","3030","4040"),accessChat);
// @URL : http://localhost:3001/chat  || @Function : Get all the logged User's Chats || @Method : GET || @Middlewares : need to be authentificated
chatRouter.get('/',auth,verifyRoles("2020","3030","4040"),fetchChats);

module.exports = chatRouter;