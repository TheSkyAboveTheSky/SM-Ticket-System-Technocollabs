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
const getUserTimelines = async (req, res) => {
  try {
    const timelines = await Timeline.find({ user: { $eq: req.params.userid } });
    console.log("succes");
    res.json(timelines);
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  createTimeline,
  getUserTimelines,
};
