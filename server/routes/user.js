const { Router } = require("express");
const userRouter = Router();
const { getAllusers,getUser,deleteUser,getMe,updateUser,createUser,} = require("../controllers/user");
const auth = require("../middlewares/auth");

// @URL : http://localhost:3001/user || @Function : Get All Users || @Method : GET
userRouter.get("/", getAllusers);
// @URL : http://localhost:3001/user/:id || @Function : Get User By ID || @Method : GET || @Middlewares : need to be authentificated
userRouter.get("/:id", auth, getUser);
// @URL : http://localhost:3001/user || @Function : Create a User || @Method : POST
userRouter.post("/", createUser);
// @URL : http://localhost:3001/user/:id || @Function : Delete User By Id || @Method : DELETE || @Middlewares : need to be authentificated
userRouter.delete("/:id", auth, deleteUser);
// @URL : http://localhost:3001/user/:id || @Function : Update a User By ID || @Method : PUT || @Middlewares : need to be authentificated
userRouter.put("/:id", auth, updateUser);
// @URL : http://localhost:3001/user || @Function : Get The Logged User Info || @Method : GET || @Middlewares : need to be authentificated
userRouter.get("/info/me", auth, getMe);

module.exports = userRouter;
