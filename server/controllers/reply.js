const Reply = require("../models/Reply");
const Ticket = require("../models/Ticket");

const getTicketReplies = async (req, res) => {
  try {
    const replies = await Reply.find({ ticket: req.params.ticket })
      .populate("ticket")
      .populate("user");
    res.status(200).json(replies);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
};
const createReply = async (req, res) => {
  try {
    const reply = await Reply.create(req.body);
    try {
      const ticket = await Ticket.findOne(
        { _id: reply.ticket }
      );
      ticket.replyIdList = [...ticket.replyIdList,reply.ticket];
      ticket.save();
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
    res.status(200).json(reply);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
module.exports = { getTicketReplies, createReply };
