const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try{
    // get token from header
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).json({ message : 'No authentification token , access denied'});
    const verified = await jwt.verify(token,process.env.JWT_SECRET);
    if (!verified) return res.status(401).json({ message : 'Authentication failed' });
    req.user = verified.UserInfo.id;
    req.roles = verified.UserInfo.roles;
    next();
  }catch(err){
  console.log(err);
  return res.status(500).json({ message : err });
}
}
module.exports = auth;