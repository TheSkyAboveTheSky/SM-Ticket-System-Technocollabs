const {Router} = require("express");
const userRouter = Router();
const {
  getAllusers,
  getUser,
  deleteUser,
  getMe,
  updateUser,
  createUser,
} = require("../controllers/user");
const auth = require('../middlewares/auth');

userRouter.get("/", getAllusers);
userRouter.get("/:id",auth, getUser);
userRouter.post("/", createUser);
userRouter.delete("/:id",auth, deleteUser);
userRouter.put("/:id",auth, updateUser);
userRouter.get("/info/me",auth, getMe);

module.exports = userRouter;
