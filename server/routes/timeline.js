const {Router} = require("express");
const timelineRouter = Router();
const { getUserLogsTimelines,getUserTasksTimelines, createTimeline } = require("../controllers/timeline");

timelineRouter.get("/:userid/logs", getUserLogsTimelines);
timelineRouter.get("/:userid/tasks", getUserTasksTimelines);
timelineRouter.post("/", createTimeline);

module.exports = timelineRouter;