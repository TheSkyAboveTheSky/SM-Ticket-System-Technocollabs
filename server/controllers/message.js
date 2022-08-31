const Message = require("../models/Message");
const User = require("../models/Users");
const Chat = require("../models/Chat");

const allMessages = async (req, res) => {
  try {
    const messages = await Message.find({ chatId: req.params.chatId })
      .populate("sender", "username team email")
      .populate("chatId");
    res.status(200).json(messages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const sendMessage = async (req,res) => {
  const text = req.body.text;
  const chatId = req.body.chatId;
  if(!text || !chatId) {
    console.log("Invalid data passed into request");
    return res.status(404).json({ message: "Invalid data passed into request" });
  }
  let newMessage = {
    sender : req.user._id,
    text : text,
    chatId : chatId
  }
  try{
    let message = await Message.create(newMessage);
    message = await message.populate("sender","username team");
    message = await message.populate("chatId");
    message = await User.populate(message,{
      path: 'chat.users',
      select: "name team email",
    });
    await Chat.findByIdAndUpdate(req.body.chatId,{latestMessage : message});
    res.status(200).json(message);
  }catch(err){
    res.status(500).json({ message: err.message });
  }
}
module.exports = {allMessages,sendMessage};