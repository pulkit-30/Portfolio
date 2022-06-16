const route = require('express').Router();
const ExpModel = require('../models/experience');
route.get('/', (req, res) => {
  try {
    ExpModel.find({}, (error, data) => {
      if (error) throw new Error(error);
      data = data.reverse();
      res.render('index', { title: 'About Pulkit Gupta', exp: data });
    });
  } catch (error) {
    res.send('Sorry Something went wrong!!');
  }
});

module.exports = route;
