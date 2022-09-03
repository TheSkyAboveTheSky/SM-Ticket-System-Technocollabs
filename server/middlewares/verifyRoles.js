const verifyRoles = (...allowedRoles) => {
  return async (req,res,next) => {
    if(!req?.roles) {
      return res.sendStatus(401);//UnAuthorized
    }
    const rolesArray = [...allowedRoles];
    const array = [req.roles];
    const result = array.map(role => rolesArray.includes(role)).find(val => val == true);
    if(!result) {
      return res.sendStatus(401);
    }
    next();
  }
}
module.exports = verifyRoles;