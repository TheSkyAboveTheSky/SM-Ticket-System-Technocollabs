const todoRouter = require('express').Router();
const {getTodos , createTodo} = require('../controllers/todo');
const auth = require('../middlewares/auth');

// @URL : http://localhost:3001/todo || @Function : GET All The Todos || @Method : GET || @Middlewares : need to be authentificated
todoRouter.get('/',auth,getTodos);
// @URL : http://localhost:3001/todo || @Function : Create a New Todo || @Method : POST || @Middlewares : need to be authentificated
todoRouter.post('/',auth,createTodo);

module.exports = todoRouter;