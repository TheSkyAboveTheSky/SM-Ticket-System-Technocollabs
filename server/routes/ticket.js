const { Router } = require("express");
const ticketRouter = Router();
const {
  getAllTickets,
  getTicket,
  updateTicket,
  deleteTicket,
  createTicket,
} = require("../controllers/ticket");
ticketRouter.get("/", getAllTickets);
ticketRouter.get("/:id", getTicket);
ticketRouter.post("/", createTicket);
ticketRouter.put("/:id", updateTicket);
ticketRouter.delete("/:id", deleteTicket);
module.exports = ticketRouter;
