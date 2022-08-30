const {Router} = require("express");
const timelineRouter = Router();
const { getUserLogsTimelines,getUserTasksTimelines, createTimeline } = require("../controllers/timeline");
const auth = require('../middlewares/auth');

timelineRouter.get("/:userid/logs",auth, getUserLogsTimelines);
timelineRouter.get("/:userid/tasks",auth, getUserTasksTimelines);
timelineRouter.post("/", auth,createTimeline);

module.exports = timelineRouter;