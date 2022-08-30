const Chat = require('../models/Chat');
const User = require('../models/Users');

const accessChat = async (req,res) => {
  const {userId} = req.body;
  if(!userId){
    console.log('UserId not found');
    return res.status(400).json({message : 'UserId not found'});
  }
  let isChat = await Chat.find({
    isGroupChat: false,
    $and : [
      {users : {$elemMatch : { $eq : req.us}}}
    ]
  })
}