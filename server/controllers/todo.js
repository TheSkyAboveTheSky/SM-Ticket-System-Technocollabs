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
const deleteTodo = async (req,res) => {
  try{
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message : "Todo deleted successfully"});
  }catch(err){
    res.status(500).json({message: err.message});
  }
}
const updateTodo = async (req,res) => {
  try{
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body);
  }catch(err){
    res.status(500).json({message: err.message});
  }
}
module.exports = {getTodos , createTodo,deleteTodo, updateTodo};