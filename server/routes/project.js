const { Router } = require("express");
const projectRouter = Router();
const {
  getAllProjects,
  getProject,
  updateProject,
  deleteProject,
  createProject,
  getOnGoingProjects,
  getUpComingProjects,
  getCompletedProjects,
} = require("../controllers/project");
const auth = require('../middlewares/auth');

projectRouter.get("/",auth, getAllProjects);
projectRouter.get("/ongoing",auth, getOnGoingProjects);
projectRouter.get("/upcoming",auth, getUpComingProjects);
projectRouter.get("/completed",auth, getCompletedProjects);
projectRouter.get("/:id",auth, getProject);
projectRouter.post("/",auth, createProject);
projectRouter.put("/:id",auth, updateProject);
projectRouter.delete("/:id",auth, deleteProject);

module.exports = projectRouter;
