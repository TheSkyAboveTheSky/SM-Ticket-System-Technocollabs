const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const replySchema = new Schema({
  title : String,
  user : {
    type : mongoose.Schema.Types.ObjectId, ref : "User"
  },
  ticket : {
    type : mongoose.Schema.Types.ObjectId, ref : "Ticket"
  },
  content : String,
  loves : Number,
  comments : Number,
},{timestamps: true});

module.exports = mongoose.model("Reply",replySchema);