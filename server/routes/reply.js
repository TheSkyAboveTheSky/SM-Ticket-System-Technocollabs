const replyRouter = require('express').Router();
const {getTicketReplies,createReply} = require('../controllers/reply');
const auth = require('../middlewares/auth');
const verifyRoles = require("../middlewares/verifyRoles");

// @URL : http://localhost:3001/ticket:ticket || @Function : Get Replies of a certain Ticket || @Method : GET || @Middlewares : need to be authentificated
replyRouter.get('/:ticket',auth,verifyRoles("2020","3030","4040"),getTicketReplies);
// @URL : http://localhost:3001/ticket || @Function : Create a new Reply || @Method : POST || @Middlewares : need to be authentificated
replyRouter.post('/',auth,verifyRoles("2020","3030","4040"),createReply);

module.exports = replyRouter;