const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name : {
    type : String,
  },
  mobile : {
    type : String,
  },
  email : {
    type : String,
  },
  address : {
    type : String,
  }
})
module.exports = mongoose.model('Contact', contactSchema);