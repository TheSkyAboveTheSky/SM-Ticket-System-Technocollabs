const {Router} = require("express");
const clientRouter = Router();
const {
  getAllClients,
  createClient,
  getClient,
  updateClient,
  deleteClient,
} = require("../controllers/Client");
clientRouter.get("/", getAllClients);
clientRouter.get("/:id", getClient);
clientRouter.post("/", createClient);
clientRouter.put("/:id", updateClient);
clientRouter.delete("/:id", deleteClient);

module.exports = clientRouter;