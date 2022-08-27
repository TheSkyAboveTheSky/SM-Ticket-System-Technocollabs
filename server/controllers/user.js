const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = require("../models/Users");

const getAllusers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
const getUser = async (req, res) => {
  const id = req.params.id;
  const isValide = mongoose.isValidObjectId(id);
  if (!isValide) {
    res.status(400).json({ message: "Invalid id" });
  }
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
const updateUser = async (req, res) => {
  const id = req.params.id;
  const isValide = mongoose.isValidObjectId(id);
  if (!isValide) {
    res.status(400).json({ message: "Invalid id" });
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
const createUser = async (req, res) => {
  const email = req.body.email;
  try {
    // check if email already exists
    user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }
    // create user
    user = new User({
      email: email,
      username: req.body.username,
      password: req.body.password,
      roles: req.body.roles,
    });
    // hash user password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hashSync(user.password, salt);
    await user.save();
    // return JWT Token
    const token = jwt.sign(
      { id: user._id, roles: user.roles },
      process.env.JWT_SECRET,
      { expiresIn: "2 days" }
    );
    return res.status(200).json({ token: token, user: user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllusers,
  getUser,
  deleteUser,
  getMe,
  updateUser,
  createUser,
};
