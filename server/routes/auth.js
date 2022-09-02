const {Router} = require("express");
const authRouter = Router();
const handleLogin = require("../controllers/auth");
const verifyRoles = require("../middlewares/verifyRoles");

// @URL : http://localhost:3001/auth/login  || @Function : Authentification || @Method : POST || @Middlewares : need to be authentificated
authRouter.post("/login",verifyRoles("0000","1010","2020","3030","4040"),handleLogin);

module.exports = authRouter;
