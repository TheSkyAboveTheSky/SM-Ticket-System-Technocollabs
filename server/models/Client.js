const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const clientSchema = new Schema({
  fullName : {
    type : String,
    required : true
  },
  email : {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  country : {
    type: String,
    required: "Country is required",
  },
  projects : {
    type : Number,
    default: 0,
  },
  deal : {
    type: Number,
    default: 0,
  },
  address : {
    type: String,
  },
  facebook : String,
  twitter : String,
  linkedin : String,
})
module.exports = mongoose.model('Client',clientSchema);