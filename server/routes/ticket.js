const { Router } = require("express");
const ticketRouter = Router();
const {
  getAllTickets,
  getTicket,
  updateTicket,
  deleteTicket,
  createTicket,
} = require("../controllers/ticket");
const auth = require("../middlewares/auth");

ticketRouter.get("/",auth, getAllTickets);
ticketRouter.get("/:id",auth, getTicket);
ticketRouter.post("/",auth, createTicket);
ticketRouter.put("/:id",auth, updateTicket);
ticketRouter.delete("/:id",auth, deleteTicket);
module.exports = ticketRouter;
