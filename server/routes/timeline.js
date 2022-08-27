const Router = require("express").Router();
const timelineRouter = Router();
const { getUserTimelines, createTimeline } = require("../controllers/timeline");

timelineRouter.get("/:userid", getUserTimelines);
timelineRouter.post("/", createTimeline);

module.exports = timelineRouter;
