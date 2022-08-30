const {Router} = require("express");
const clientRouter = Router();
const {
  getAllClients,
  createClient,
  getClient,
  updateClient,
  deleteClient,
} = require("../controllers/Client");
const auth = require('../middlewares/auth');
clientRouter.get("/",auth, getAllClients);
clientRouter.get("/:id",auth, getClient);
clientRouter.post("/",auth, createClient);
clientRouter.put("/:id",auth, updateClient);
clientRouter.delete("/:id",auth, deleteClient);

module.exports = clientRouter;