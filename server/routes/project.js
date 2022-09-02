const { Router } = require("express");
const projectRouter = Router();
const {getAllProjects,getProject,updateProject,deleteProject,createProject,getOnGoingProjects,getUpComingProjects,getCompletedProjects,} = require("../controllers/project");
const auth = require('../middlewares/auth');
const verifyRoles = require("../middlewares/verifyRoles");

// @URL : http://localhost:3001/project || @Function : Get ALl The Projects || @Method : GET || @Middlewares : need to be authentificated
projectRouter.get("/",auth,verifyRoles("2020","3030","4040"),getAllProjects);
// @URL : http://localhost:3001/project/ongoing || @Function : Get The OnGoing Projects || @Method : GET || @Middlewares : need to be authentificated
projectRouter.get("/ongoing",auth,verifyRoles("2020","3030","4040"),getOnGoingProjects);
// @URL : http://localhost:3001/project/upcoming || @Function : Get The UpComing Projects || @Method : GET || @Middlewares : need to be authentificated
projectRouter.get("/upcoming",auth,verifyRoles("2020","3030","4040"),getUpComingProjects);
// @URL : http://localhost:3001/project/completed || @Function : Get The Completed Projects || @Method : GET || @Middlewares : need to be authentificated
projectRouter.get("/completed",auth,verifyRoles("2020","3030","4040"),getCompletedProjects);
// @URL : http://localhost:3001/project/:id || @Function : Get Project By ID || @Method : GET || @Middlewares : need to be authentificated
projectRouter.get("/:id",auth,verifyRoles("2020","3030","4040"),getProject);
// @URL : http://localhost:3001/project || @Function :create a new Project || @Method : POST || @Middlewares : need to be authentificated
projectRouter.post("/",auth,verifyRoles("3030","4040"),createProject);
// @URL : http://localhost:3001/project/:id || @Function : Update a  project|| @Method : PUT || @Middlewares : need to be authentificated
projectRouter.put("/:id",auth,verifyRoles("3030","4040"),updateProject);
// @URL : http://localhost:3001/project/:id || @Function : Delete a project || @Method : DELETE || @Middlewares : need to be authentificated
projectRouter.delete("/:id",auth,verifyRoles("3030","4040"),deleteProject);

module.exports = projectRouter;
