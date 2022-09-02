const {Router} = require("express");
const taskRouter = Router();
const auth = require('../middlewares/auth');
const {getAllTasks,createTask,getTask,updateTask,deleteTask,} = require("../controllers/task");

// @URL : http://localhost:3001/task || @Function : Get all the tasks || @Method : GET || @Middlewares : need to be authentificated
taskRouter.get("/",auth, getAllTasks);
// @URL : http://localhost:3001/task:id || @Function : Get Task By ID || @Method : GET || @Middlewares : need to be authentificated
taskRouter.get("/:id",auth, getTask);
// @URL : http://localhost:3001/task || @Function : Create a new Task || @Method : POST || @Middlewares : need to be authentificated
taskRouter.post("/",auth, createTask);
// @URL : http://localhost:3001/task:id || @Function : Update Task By ID || @Method : PUT || @Middlewares : need to be authentificated
taskRouter.put("/:id",auth, updateTask);
// @URL : http://localhost:3001/task:id || @Function : Delete Task By ID || @Method : DELETE || @Middlewares : need to be authentificated
taskRouter.delete("/:id",auth, deleteTask)

module.exports = taskRouter;
