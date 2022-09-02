const {Router} = require("express");
const timelineRouter = Router();
const { getUserLogsTimelines,getUserTasksTimelines, createTimeline } = require("../controllers/timeline");
const auth = require('../middlewares/auth');

// @URL : http://localhost:3001/timeline/:userid/logs || @Function : Get A specific User Logs Timelines || @Method : GET || @Middlewares : need to be authentificated
timelineRouter.get("/:userid/logs",auth, getUserLogsTimelines);
// @URL : http://localhost:3001/timeline/:userid/tasks || @Function :Get A specific User Tasks Timelines|| @Method : GET || @Middlewares : need to be authentificated
timelineRouter.get("/:userid/tasks",auth, getUserTasksTimelines);
// @URL : http://localhost:3001/timeline || @Function : Create a new Timeline|| @Method : POST || @Middlewares : need to be authentificated
timelineRouter.post("/", auth,createTimeline);

module.exports = timelineRouter;