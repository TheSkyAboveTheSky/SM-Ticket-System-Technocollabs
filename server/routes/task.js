const {Router} = require("express");
const taskRouter = Router();
const auth = require('../middlewares/auth');
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/task");
taskRouter.get("/",auth, getAllTasks);
taskRouter.get("/:id",auth, getTask);
taskRouter.post("/",auth, createTask);
taskRouter.put("/:id",auth, updateTask);
taskRouter.delete("/:id",auth, deleteTask)

module.exports = taskRouter;
