const replyRouter = require('express').Router();
const {getTicketReplies,createReply} = require('../controllers/reply');
const auth = require('../middlewares/auth');

// @URL : http://localhost:3001/ticket:ticket || @Function : Get Replies of a certain Ticket || @Method : GET || @Middlewares : need to be authentificated
replyRouter.get('/:ticket',auth,getTicketReplies);
// @URL : http://localhost:3001/ticket || @Function : Create a new Reply || @Method : POST || @Middlewares : need to be authentificated
replyRouter.post('/',auth,createReply);

module.exports = replyRouter;