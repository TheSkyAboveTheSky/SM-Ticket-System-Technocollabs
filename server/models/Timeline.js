const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timelineSchema = Schema({
  body :String,
  user :  {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  type :{
    type : Number,
    enum : [1,2,3,4,5,6,7,8,9]
  }
},{timestamps:true})

module.exports = mongoose.model("Timeline",timelineSchema);