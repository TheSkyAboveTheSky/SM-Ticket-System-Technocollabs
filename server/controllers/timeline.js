const Timeline = require("../models/Timeline");

const createTimeline = async (req, res) => {
  const timeline = new Timeline({
    body: req.body.body,
    user: req.body.user,
    type: req.body.type,
  });
  try {
    const newTimeline = await timeline.save();
    res.json(newTimeline);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getUserLogsTimelines = async (req, res) => {
  try {
    const timelines = await Timeline.find({ $and : [{user: { $eq: req.params.userid } },{ type : { $eq : "Logs"}}]});
    console.log("succes");
    res.json(timelines);
  } catch (err) {
    console.log(err);
  }
};
const getUserTasksTimelines = async (req, res) => {
  try {
    const timelines = await Timeline.find({ $and : [{user: { $eq: req.params.userid } },{ type : { $eq : "Tasks"}}]});
    console.log("succes");
    res.json(timelines);
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  createTimeline,
  getUserLogsTimelines,
  getUserTasksTimelines,
};
