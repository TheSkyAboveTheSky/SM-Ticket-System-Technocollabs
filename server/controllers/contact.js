const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(200).json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = {
  createContact,
  getContacts,
  deleteContact,
}