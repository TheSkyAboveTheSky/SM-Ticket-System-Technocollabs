const Todo = require('../models/Todo');

const createTodo = async (req,res) => {
  try{
    const todo = await Todo.create(req.body);
    res.status(200).json(todo);
  }catch(err){
    res.status(500).json({message: err.message});
  }
}
const getTodos = async (req,res) => {
  try{
    const todos = await Todo.find();
    res.status(200).json(todos);
  }catch(err){
    res.status(500).json({message: err.message});
  }
}
module.exports = {getTodos , createTodo};