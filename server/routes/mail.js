const {Router} = require("express");
const mailRouter = Router();
const sendMail = require('../controllers/mail');

mailRouter.post('/',sendMail);

module.exports = mailRouter;