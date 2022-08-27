const Task = require('../models/Task');
const mongoose = require("mongoose");

const getAllTasks = async (req,res) => {
  try{
    const tasks = await Task.find();
    res.status(200).json(tasks);
  }catch(err){
    console.log(err);
  }
}
const getTask = async (req, res) => {
  const id = req.params.id;
  const isValide = mongoose.isValidObjectId(id);
  if(!isValide){
    res.status(400).json({ message: 'Invalid id' });
  }
  try{
    const task = await Task.findById(id);
    res.status(200).json(task);
  }catch(err){
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}
const deleteTask = async (req,res) => {
  try{
    const task = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message : "Task deleted successfully"});
  }catch(err){
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}
const updateTask = async (req,res) => {
  const id = req.params.id;
  const isValide = mongoose.isValidObjectId(id);
  if(!isValide){
    res.status(400).json({ message: 'Invalid id' });
  }
  try{
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedTask);
  }catch(err){
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}
const createTask = async (req,res) => {
  try{
    const task = await Task.create(req.body);
    res.status(200).json(task);
  }catch(err){
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
}