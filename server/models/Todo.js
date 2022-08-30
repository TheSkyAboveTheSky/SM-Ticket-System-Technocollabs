const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title : {
    type :String,
    required : true,
  },
  due : {
    type :Date,
    required : true,
  },
  team : {
    type :String,
  },
  priority : {
    type :String,
    enum : ['Low', 'Medium', 'High'],
    default : 'Low',
    required : true,
  }
})

module.exports = mongoose.model("Todo",todoSchema);