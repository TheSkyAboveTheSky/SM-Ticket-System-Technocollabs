const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  id:String,
  title: String,
  details: String,
  userName: String,
  date: Date,
  department: String,
  numberOfReplies: Number,
  Priority: {
    type : String,
    default : "Low",
    enum : ["Low", "Medium", "High"]
  },
  Product: String,
  agent: String,
  replyIdList: Array,
});
module.exports = mongoose.model("Ticket", ticketSchema);
