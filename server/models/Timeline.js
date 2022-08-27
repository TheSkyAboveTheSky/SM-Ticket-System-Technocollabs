const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timelineSchema = Schema({
  body :String,
  user :  {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  type :{
    type : String,
    enum : ["Logs","Tasks"]
  }
},{timestamps:true})

module.exports = mongoose.model("Timeline",timelineSchema);