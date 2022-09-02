const {Router} = require("express");
const mailRouter = Router();
const sendMail = require('../controllers/mail');

// @URL : http://localhost:3001/send-mail || @Function : Send an Email|| @Method : POST || @Middlewares : need to be authentificated
mailRouter.post('/',sendMail);

module.exports = mailRouter;