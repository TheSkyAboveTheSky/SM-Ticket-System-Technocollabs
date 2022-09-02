const { Router } = require("express");
const projectRouter = Router();
const {getAllProjects,getProject,updateProject,deleteProject,createProject,getOnGoingProjects,getUpComingProjects,getCompletedProjects,} = require("../controllers/project");
const auth = require('../middlewares/auth');

// @URL : http://localhost:3001/project || @Function : Get ALl The Projects || @Method : GET || @Middlewares : need to be authentificated
projectRouter.get("/",auth, getAllProjects);
// @URL : http://localhost:3001/project/ongoing || @Function : Get The OnGoing Projects || @Method : GET || @Middlewares : need to be authentificated
projectRouter.get("/ongoing",auth, getOnGoingProjects);
// @URL : http://localhost:3001/project/upcoming || @Function : Get The UpComing Projects || @Method : GET || @Middlewares : need to be authentificated
projectRouter.get("/upcoming",auth, getUpComingProjects);
// @URL : http://localhost:3001/project/completed || @Function : Get The Completed Projects || @Method : GET || @Middlewares : need to be authentificated
projectRouter.get("/completed",auth, getCompletedProjects);
// @URL : http://localhost:3001/project/:id || @Function : Get Project By ID || @Method : GET || @Middlewares : need to be authentificated
projectRouter.get("/:id",auth, getProject);
// @URL : http://localhost:3001/project || @Function :create a new Project || @Method : POST || @Middlewares : need to be authentificated
projectRouter.post("/",auth, createProject);
// @URL : http://localhost:3001/project/:id || @Function : Update a  project|| @Method : PUT || @Middlewares : need to be authentificated
projectRouter.put("/:id",auth, updateProject);
// @URL : http://localhost:3001/project/:id || @Function : Delete a project || @Method : DELETE || @Middlewares : need to be authentificated
projectRouter.delete("/:id",auth, deleteProject);

module.exports = projectRouter;
