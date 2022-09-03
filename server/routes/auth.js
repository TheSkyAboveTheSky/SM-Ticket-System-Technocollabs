const {Router} = require("express");
const authRouter = Router();
const handleLogin = require("../controllers/auth");

// @URL : http://localhost:3001/auth/login  || @Function : Authentification || @Method : POST || @Middlewares : need to be authentificated
authRouter.post("/login",handleLogin);

module.exports = authRouter;
