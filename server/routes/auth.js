const {Router} = require("express");
const authRouter = Router();
const handleLogin = require("../controllers/auth");
authRouter.post("/login", handleLogin);
module.exports = authRouter;
