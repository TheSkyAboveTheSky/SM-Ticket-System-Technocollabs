const replyRouter = require('express').Router();
const {getTicketReplies,createReply} = require('../controllers/reply');
const auth = require('../middlewares/auth');

replyRouter.get('/:ticket',auth,getTicketReplies);
replyRouter.post('/',auth,createReply);

module.exports = replyRouter;