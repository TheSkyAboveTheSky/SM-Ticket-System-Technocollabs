const Conversation = require('../models/Conversation');

const createConversation = async (req,res) => {
  try{
    const conversation = await Conversation.create(req.body);
    res.status(200).json(conversation);
  }catch(err){
    res.status(500).json(err);
  }
}
const getConversation = async (req,res) => {
  try{
    const conversation = await Conversation.findOne({
      members : {$in : [req.params.userID]}
    });
    res.status(200).json(conversation);
  }catch(err){
    res.status(500).json(err);
  }
}
const getConversationById = async (req,res) => {
  try{
    const conversation = await Conversation.findOne({
      members : {$all : [req.params.firstUserId,req.params.secondUserId]}
    });
    res.status(200).json(conversation);
  }catch(err){
    res.status(500).json(err);
  }
}
const getConversationTwoUsers = async (req,res) => {
  try{
    const conversation = await Conversation.findOne({
      members : {$all : [req.params.firstUserId,req.params.seconduserId]}
    });
    res.status(200).json(conversation);
  }catch(err){
    res.status(500).json(err);
  }
}
module.exports = {
  getConversation,
  createConversation,
  getConversationById,
  getConversationTwoUsers,
}