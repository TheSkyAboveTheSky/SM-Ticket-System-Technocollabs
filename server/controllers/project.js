const Project = require('../models/Project');
const mongoose = require("mongoose");

// Controller : GetAllProjects
const getAllProjects = async (req,res) => {
  try{
    const projects = await Project.find();
    res.status(200).json(projects);
  }catch(err){
    console.log(err);
  }
}
// Controller : GetProjectByID
const getProject = async (req, res) => {
  const id = req.params.id;
  const isValide = mongoose.isValidObjectId(id);
  if(!isValide){
    res.status(400).json({ message: 'Invalid id' });
  }
  try{
    const project = await Project.findById(id);
    res.status(200).json(project);
  }catch(err){
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}
// Controller : DeleteProjectByID
const deleteProject = async (req,res) => {
  try{
    const project = await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({ message : "Project deleted successfully"});
  }catch(err){
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}
// Controller : UpdateProjectByID
const updateProject = async (req,res) => {
  const id = req.params.id;
  const isValide = mongoose.isValidObjectId(id);
  if(!isValide){
    res.status(400).json({ message: 'Invalid id' });
  }
  try{
    const updatedProject = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedProject);
  }catch(err){
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}
// Controller : CreateProject
const createProject = async (req,res) => {
  try{
    const project = await Project.create(req.body);
    res.status(200).json(project);
  }catch(err){
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}
// Controller : GetOnGoingProjects
const getOnGoingProjects = async (req,res) => {
  try{
    const projects = await Project.find({ status : {$eq :"OnGoing" }});
    res.status(200).json(projects);
  }catch(err){
    console.log(err);
  }
}
// Controller : GetUpComingProjects
const getUpComingProjects = async (req,res) => {
  try{
    const projects = await Project.find({status : {$eq : "UpComing" }});
    res.status(200).json(projects);
  }catch(err){
    console.log(err);
  }
}
// Controller : GetCompletedProjects
const getCompletedProjects = async (req,res) => {
  try{
    const projects = await Project.find({status : {$eq : "Completed" }});
    res.status(200).json(projects);
  }catch(err){
    console.log(err);
  }
}

module.exports = {
  getAllProjects,
  getProject,
  updateProject,
  deleteProject,
  createProject,
  getOnGoingProjects,
  getUpComingProjects,
  getCompletedProjects,
}