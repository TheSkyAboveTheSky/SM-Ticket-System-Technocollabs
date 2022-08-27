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
projectRouter.get("/", getAllProjects);
projectRouter.get("/ongoing", getOnGoingProjects);
projectRouter.get("/upcoming", getUpComingProjects);
projectRouter.get("/completed", getCompletedProjects);
projectRouter.get("/:id", getProject);
projectRouter.post("/", createProject);
projectRouter.put("/:id", updateProject);
projectRouter.delete("/:id", deleteProject);

module.exports = projectRouter;
