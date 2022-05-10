const mongoose = require('mongoose');
const Contact = require('../models/contact');

const newConatct = async (data, res) => {
  try {
    const newContactData = await new Contact(data);
    await newContactData
      .save()
      .then(() => {
        res.status(200).redirect('/success');
      })
      .catch((err) => {
        res.status(500).redirect('/failure');
      });
  } catch (error) {
    res.status(500).redirect('/failure');
  }
};
const AllContacts = (res) => {
  try {
    Contact.find({}, (error, contacts) => {
      if (error) {
        res.status(500).redirect('/failure');
      } else {
        res.status(200).json(contacts);
      }
    });
  } catch (error) {
    res.status(500).redirect('/failure');
  }
};

module.exports = {
  newConatct,
  AllContacts,
};
