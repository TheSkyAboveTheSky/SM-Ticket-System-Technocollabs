const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
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
  progress: {
    type: Number,
    default: 0,
    required: true,
  },
});

module.exports = mongoose.model("Task", taskSchema);
