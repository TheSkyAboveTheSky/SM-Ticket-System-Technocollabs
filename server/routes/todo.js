const todoRouter = require('express').Router();
const {getTodos , createTodo} = require('../controllers/todo');
const auth = require('../middlewares/auth');

todoRouter.get('/',auth,getTodos);
todoRouter.post('/',auth,createTodo);

module.exports = todoRouter;