const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/Users");
require("dotenv").config();

const handleLogin = async (req, res) => {
  // get email and the password from the req
  const email = req.body.email;
  const password = req.body.password;
  // email or assword does nor exists
  if (!email || !password) {
    return res.status(400).send({
      error: "Email and password are required",
    });
  }
  // User with this email
  const foundUser = await User.findOne({ email: email });
  // No User with this email
  if (!foundUser) {
    return res.status(401).json({
      message: "User not found",
    }); // unauthorized
  }
  // Evaluate password
  try {
    // compare the result of hashing the password with the hashed of the foundUser
    const isMatch = await bcrypt.compareSync(password, foundUser.password);
    // No Matching
    if (!isMatch) {
      return res.status(400).send({ message: "Invalid credentials" });
    }
    // generate the JWT token
    const token = jwt.sign(
      {
        UserInfo: {
          id: foundUser._id,
          roles: foundUser.roles,
        },
      },
      process.env.JWT_SECRET
    );
    // sending the token
    res.json({
      token: token,
      user: {
        id: foundUser._id,
        username: foundUser.username,
        roles: foundUser.roles,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = handleLogin;
