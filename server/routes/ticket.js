const { Router } = require("express");
const ticketRouter = Router();
const {getAllTickets,getTicket,updateTicket,deleteTicket,createTicket,} = require("../controllers/ticket");
const auth = require("../middlewares/auth");
const verifyRoles = require("../middlewares/verifyRoles");

// @URL : http://localhost:3001/ticket|| @Function : Get all the tickets || @Method : GET || @Middlewares : need to be authentificated
ticketRouter.get("/",auth,verifyRoles("2020","3030","4040"), getAllTickets);
// @URL : http://localhost:3001/ticket:id || @Function : Get Ticket By ID || @Method : GET || @Middlewares : need to be authentificated
ticketRouter.get("/:id",auth,verifyRoles("2020","3030","4040"), getTicket);
// @URL : http://localhost:3001/ticket || @Function : Create a new Ticket|| @Method : POST || @Middlewares : need to be authentificated
ticketRouter.post("/",auth,verifyRoles("3030","4040"), createTicket);
// @URL : http://localhost:3001/ticket:id || @Function : Update a Ticket || @Method : PUT || @Middlewares : need to be authentificated
ticketRouter.put("/:id",auth,verifyRoles("3030","4040"), updateTicket);
// @URL : http://localhost:3001/ticket:id || @Function : Delete a Ticket By ID || @Method : DELETE || @Middlewares : need to be authentificated
ticketRouter.delete("/:id",auth,verifyRoles("3030","4040"), deleteTicket);

module.exports = ticketRouter;
