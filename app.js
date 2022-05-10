require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const body_parser = require('body-parser');
const DB_Connection = require('./utils/connection');
const home = require('./router/home');
const contact = require('./router/contact');
const resume = require('./router/resume');
const project = require('./router/project');
const success = require('./router/success');
const failure = require('./router/failure');
const blog = require('./router/blog');

// ** App utilities
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use(body_parser.urlencoded({ extended: true }));

// ** App view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//** connection Database
DB_Connection()
  .then(() => {
    console.log('Database connected Successfully!');
  })
  .catch((err) =>
    console.log('Cannot Connect your Database !! Error -->  ', err)
  );

//**  App Routes
app.use('/', home);
app.use('/contact', contact);
app.use('/resume', resume);
app.use('/projects', project);
app.use('/blog', blog);
app.use('/success', success);
app.use('/failure', failure);

// ** App Listening
const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log('Running at PORT', port);
});
