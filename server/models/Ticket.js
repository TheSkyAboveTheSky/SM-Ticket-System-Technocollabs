const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  title: String,
  details: String,
  userName: String,
  date: Date,
  department: String,
  numberOfReplies: Number,
  Priority: String,
  Product: String,
  agent: String,
  replyIdList: Array,
});
module.exports = mongoose.model("Ticket", ticketSchema);
