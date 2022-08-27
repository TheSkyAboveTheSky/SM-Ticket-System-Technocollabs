const Router = require("express").Router();
const authRouter = Router();
const handleLogin = require("../controllers/auth");
authRouter.post("/login", handleLogin);
module.exports = authRouter;
