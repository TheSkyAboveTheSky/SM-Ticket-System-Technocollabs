const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  id:{
    type : String,
    required : true,
    unique : true,
  },
  title: String,
  details: String,
  userName: String,
  date: Date,
  departement: String,
  numberOfReplies: Number,
  Priority: {
    type : String,
    default : "Low",
    enum : ["Low", "Medium", "High"]
  },
  Product: String,
  agent: String,
  replyIdList: [{
    type : mongoose.Schema.Types.ObjectId, ref : "Reply"
  }],
  progress : {
    type :Number,
    default : 0,
  }
});
module.exports = mongoose.model("Ticket", ticketSchema);
