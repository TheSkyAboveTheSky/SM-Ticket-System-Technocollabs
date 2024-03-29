const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  name : {
    type : String,
  },
  isGroupChat : {type: Boolean, default: false},
  users : [{type : mongoose.Schema.Types.ObjectId,ref:"User"}],
  latestMessage : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Message",
  },
  groupAdmin : {type : mongoose.Schema.Types.ObjectId,ref : "User"},
},{timestamps: true});
module.exports = mongoose.model("Chat",chatSchema);