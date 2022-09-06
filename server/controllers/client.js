const Client = require('../models/Client');
const mongoose = require("mongoose");

// Controller : GetAllClients
// @URL : http://localhost:3001/client  || @Function : Get all the clients || @Method : GET || @Middlewares : need to be authentificated and have the admin Role
const getAllClients = async (req,res) => {
  try{
    const clients = await Client.find();
    res.status(200).json(clients);
  }catch(err){
    console.log(err);
  }
}
// Controller : GetClientByID
const getClient = async (req, res) => {
  const id = req.params.id;
  const isValide = mongoose.isValidObjectId(id);
  if(!isValide){
    res.status(400).json({ message: 'Invalid id' });
  }
  try{
    const client = await Client.findById(id);
    res.status(200).json(client);
  }catch(err){
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}
// Controller : DeleteClientNByID
const deleteClient = async (req,res) => {
  try{
    const client = await Client.findByIdAndDelete(req.params.id);
    res.status(200).json({ message : "Client deleted successfully"});
  }catch(err){
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}
// Controller : UpdateClientByID
const updateClient = async (req,res) => {
  const id = req.params.id;
  const isValide = mongoose.isValidObjectId(id);
  if(!isValide){
    res.status(400).json({ message: 'Invalid id' });
  }
  try{
    const updatedClient = await Client.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedClient);
  }catch(err){
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}
// Controller : CreateClient
const createClient = async (req,res) => {
  try{
    const client = await Client.create(req.body);
    res.status(200).json(client);
  }catch(err){
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getAllClients,
  getClient,
  updateClient,
  deleteClient,
  createClient,
}