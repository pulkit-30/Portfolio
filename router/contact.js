require('dotenv').config();
const route = require('express').Router();
const DB_Contact = require('../db/Message');
const main = require('../utils/nodemailer');

route.get('/', (req, res) => {
  res.render('contact', { title: 'Contact Pulkit' });
});
route.post('/newContact', async (req, res) => {
  try {
    await main({
      to: process.env.USER_EMAIL,
      subject: 'New Contact!!!',
      text: `Hey Pulkit, There is a new message from ${req.body.Name}`,
      mail: req.body,
    });
    await main({
      to: req.body.Email,
      subject: 'Thanks for contacting 🙏',
      text: `Hey ${req.body.Name}!, Hope you are doing great! I have received your message and I will surely contact you back `,
      mail: req.body,
    });
    DB_Contact.newConatct(req.body, res);
  } catch (error) {
    res.status(500).redirect('/failure');
  }
});

module.exports = route;
