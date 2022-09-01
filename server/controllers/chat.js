const Chat = require('../models/Chat');
const User = require('../models/Users');

const accessChat = async (req,res) => {
  const userId = req.body.userId;
  if(!userId)
  {
    console.log("UserId is required");
    return res.status(400).json({ message : "UserId is required" });
  }
  let isChat = await Chat.find({
    isGroupChat : false,
    $and : [
      {users : { $elemMatch : { $eq : req.user}}},
      {users : { $elemMatch : { $eq : userId}}}
    ]
  }).populate("users","-password")
  .populate("latestMessage");
  isChat = await User.populate(isChat,{
    path : "latestMessage.sender",
    select : "name team email",
  });
  if (isChat.length > 0){ res.status(200).json(isChat[0])}else{
    let charData = {
      chatName : "sender",
      isGroupChat : false,
      users : [req.user,userId],
    };
    try{
      const createChat = await Chat.create(charData);
      const fullChat = await  Chat.findOne({ _id : createChat._id}).populate('users','-password');
      res.status(200).json(fullChat);
    }catch(err){
      res.status(500).json(err);
    }
  }
};
const fetchChats = async (req,res) => {
  try {
    const chats = Chat.find({users : { $elemMatch : { $eq : req.user}}})
    .populate("users","-password")
    .populate("groupAdmin","-password")
    .populate("latestMessage")
    .sort({updatedAt : -1})
    .then(async (results) => {
      results = await User.populate(results,{
        path : "latestMessage.sender",
        select : "username team email",
      });
      res.status(200).json(results);
    })
  } catch (error) {
    res.status(400).json(error.message);
  }
}
module.exports = {
  accessChat,
  fetchChats,
}