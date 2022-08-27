const {Router} = require("express");
const taskRouter = Router();
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/task");
taskRouter.get("/", getAllTasks);
taskRouter.get("/:id", getTask);
taskRouter.post("/", createTask);
taskRouter.put("/:id", updateTask);
taskRouter.delete("/:id", deleteTask);

module.exports = taskRouter;
