const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title : {
    type : String,
    required : true
  },
  description : {
    type : String,
    required : true
  },
  type :{
    type : String,
    required : true
  },
  creator : {
    type : String,
    required : true
  },
  questions : {
    type : Number,
    default : 0
  },
  comments : {
    type : Number,
    default : 0
  },
  bugs : {
    type : Number,
    default : 0
  },
  team : {
    type : String,
    required : true
  },
  progress : {
    type : Number,
    default : 0,
    required : true
  },
  status : {
    type : String,
    default : "UpComing",
    enum : ["UpComing","OnGoing","Completed"],
    required : true
  }
},{timestamps:true})

module.exports = mongoose.model('Project',projectSchema);