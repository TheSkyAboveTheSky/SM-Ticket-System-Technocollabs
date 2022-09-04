const todoRouter = require('express').Router();
const {getTodos , createTodo,deleteTodo, updateTodo} = require('../controllers/todo');
const auth = require('../middlewares/auth');
const verifyRoles = require("../middlewares/verifyRoles");

// @URL : http://localhost:3001/todo || @Function : GET All The Todos || @Method : GET || @Middlewares : need to be authentificated
todoRouter.get('/',auth,verifyRoles("2020","3030","4040"),getTodos);
// @URL : http://localhost:3001/todo || @Function : Create a New Todo || @Method : POST || @Middlewares : need to be authentificated
todoRouter.post('/',auth,verifyRoles("3030","4040"),createTodo);
// @URL : http://localhost:3001/todo/id || @Function : Delete the  Todo || @Method : DELETE || @Middlewares : need to be authentificated
todoRouter.delete('/:id',auth,verifyRoles("3030","4040"),deleteTodo);
// @URL : http://localhost:3001/todo/id || @Function : Update the todo Todo || @Method : PUT || @Middlewares : need to be authentificated
todoRouter.put('/:id',auth,verifyRoles("3030","4040"),updateTodo);

module.exports = todoRouter;