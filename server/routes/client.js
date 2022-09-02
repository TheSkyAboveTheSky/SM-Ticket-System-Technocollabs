const {Router} = require("express");
const clientRouter = Router();
const {getAllClients,createClient,getClient,updateClient,deleteClient,} = require("../controllers/Client");
const auth = require('../middlewares/auth');

// @URL : http://localhost:3001/client  || @Function : Get all the clients || @Method : GET || @Middlewares : need to be authentificated
clientRouter.get("/",auth, getAllClients);
// @URL : http://localhost:3001/client:id  || @Function : Get Client By ID|| @Method : GET || @Middlewares : need to be authentificated
clientRouter.get("/:id",auth, getClient);
// @URL : http://localhost:3001/client  || @Function : Create a new Client || @Method : POST || @Middlewares : need to be authentificated
clientRouter.post("/",auth, createClient);
// @URL : http://localhost:3001/client:id  || @Function : Update a Client || @Method : PUT || @Middlewares : need to be authentificated
clientRouter.put("/:id",auth, updateClient);
// @URL : http://localhost:3001/client:id  || @Function : Delete a Client || @Method : DELETE || @Middlewares : need to be authentificated
clientRouter.delete("/:id",auth, deleteClient);

module.exports = clientRouter;