const { Router } = require("express");
const clientRouter = Router();
const {getAllClients,createClient,getClient,updateClient,deleteClient,} = require("../controllers/Client");
const auth = require("../middlewares/auth");
const verifyRoles = require("../middlewares/verifyRoles");

// @URL : http://localhost:3001/client  || @Function : Get all the clients || @Method : GET || @Middlewares : need to be authentificated and have the admin Role
clientRouter.get("/", auth, verifyRoles("4040"), getAllClients);
// @URL : http://localhost:3001/client:id  || @Function : Get Client By ID|| @Method : GET || @Middlewares : need to be authentificated
clientRouter.get("/:id", auth, verifyRoles("4040"), getClient);
// @URL : http://localhost:3001/client  || @Function : Create a new Client || @Method : POST || @Middlewares : need to be authentificated
clientRouter.post("/", auth, verifyRoles("4040"), createClient);
// @URL : http://localhost:3001/client:id  || @Function : Update a Client || @Method : PUT || @Middlewares : need to be authentificated
clientRouter.put("/:id", auth, verifyRoles("4040"), updateClient);
// @URL : http://localhost:3001/client:id  || @Function : Delete a Client || @Method : DELETE || @Middlewares : need to be authentificated
clientRouter.delete("/:id", auth, verifyRoles("4040"), deleteClient);

module.exports = clientRouter;
