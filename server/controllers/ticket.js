const mongoose = require("mongoose");
const Ticket = require("../models/Ticket");

const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (err) {
    console.log(err);
  }
};
const getTicket = async (req, res) => {
  const id = req.params.id;
  const isValide = mongoose.isValidObjectId(id);
  if (!isValide) {
    res.status(400).json({ message: "Invalid id" });
  }
  try {
    const ticket = await Ticket.findById(id);
    res.status(200).json(ticket);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
const deleteTicket = async (req, res) => {
  try {
    const Ticket = await task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Ticket deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
const updateTicket = async (req, res) => {
  const id = req.params.id;
  const isValide = mongoose.isValidObjectId(id);
  if (!isValide) {
    res.status(400).json({ message: "Invalid id" });
  }
  try {
    const updatedTicket = await Ticket.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedTicket);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
const createTicket = async (req, res) => {
  try {
    const ticket = await Ticket.create(req.body);
    res.status(200).json(ticket);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllTickets,
  getTicket,
  updateTicket,
  deleteTicket,
  createTicket,
};
