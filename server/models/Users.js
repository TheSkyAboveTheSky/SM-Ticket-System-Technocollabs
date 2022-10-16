const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};
const userSchema = new Schema({
  username: String,
  roles: {
    type: String,
    default: "0000",
    enum: ["0000", "1010", "2020", "3030", "4040"],
  },
  team: {
    type: String,
    default: "Team One",
  },
  email: {
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
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  birthDate :{
    type : Date,
  },
  addresse :{
    type : String,
  },
  nationality:{
    type : String
  },
  religion : {
    type : String,
  },
  martialStatus : {
    type : String,
  },
  passportNumber : {
    type : String,
  },
  emergencyContact :{
    type : String,
  },
  bankName: {
    type : String,
  },
  accountNumber:{
    type : String,
  },
  IFSC:{
    type: String,
  },
  PAN:{
    type: String,
  },
  UPI:{
    type: String,
  },
  phone :{
    type : String,
  },
  job :{
    type : String,
  },
});

module.exports = mongoose.model('User', userSchema);