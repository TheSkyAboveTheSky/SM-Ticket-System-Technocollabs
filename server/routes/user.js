const Router = require("express").Router();
const userRouter = Router();
const {
  getAllusers,
  getUser,
  deleteUser,
  getMe,
  updateUser,
  createUser,
} = require("../controllers/user");

userRouter.get("/", getAllusers);
userRouter.get("/:id", getUser);
userRouter.post("/", createUser);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updateUser);
userRouter.get("/info/me", getMe);
module.exports = userRouter;
