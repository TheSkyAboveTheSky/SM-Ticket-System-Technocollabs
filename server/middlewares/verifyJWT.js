const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req,res,next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if(!authHeader?.startsWith('Bearer ')){
    console.log("Error : Bearer");
    return res.sendStatus(401);
  } 
    
  const token = authHeader.split(' ')[1];
  jwt.verify(
    token,
    process.env.JWT_SECRET,
    (err,decoded) => {
      if(err) {
        return res.sendStatus(403);// Invalid Token
      }
      req.roles = decoded.UserInfo.roles;
      next();
    }
  )
}

module.exports = verifyJWT