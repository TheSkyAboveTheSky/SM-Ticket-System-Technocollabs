const messageRouter = require('express').Router();
const {sendMessage , allMessages} = require('../controllers/message');
const auth = require('../middlewares/auth');
const verifyRoles = require("../middlewares/verifyRoles");

// @URL : http://localhost:3001/message/:chatId || @Function : Get Chat's Messages  || @Method : GET || @Middlewares : need to be authentificated
messageRouter.get("/:chatId",auth,verifyRoles("2020","3030","4040"),allMessages);
// @URL : http://localhost:3001/message || @Function : Send a message || @Method : GET || @Middlewares : need to be authentificated
messageRouter.post('/',auth,verifyRoles("2020","3030","4040"),sendMessage);

module.exports = messageRouter;