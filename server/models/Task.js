const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    default : 'Low',
    enum : ['Low', 'Medium', 'High'],
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  due: {
    type: Date,
    required: true,
  },
  start :{
    type: Date,
    required: true,
  },
  status : {
    type : String,
    default : "UpComing",
    enum : ["UpComing","OnGoing","Completed"],
    required: true,
  },
  progress: {
    type: Number,
    default: 0,
    required: true,
  },
});

module.exports = mongoose.model("Task", taskSchema);
