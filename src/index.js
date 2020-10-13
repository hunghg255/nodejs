const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');

// Route
const route = require('./routes');
const app = express();

const db = require('./config/db');

// Connect to DB
db.connect();

//
app.use(methodOverride('_method'));

//* middlerware
// formData
app.use(express.urlencoded({
  extended: true,
}));
// axios,....
app.use(express.json());


//* static file
app.use(express.static(path.join(__dirname, 'public')));

//* HTTP logger
app.use(morgan('combined'));

//* Template engine
//* __dirname = ../src
app.engine('hbs', handlebars({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b,
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//* Home, search, contact

//* Route
route(app);

// app.get('/', (req, res) => {
//   return res.render('home')
// });

// app.get('/news', (req, res) => {
//   return res.render('news')
// });

// app.get('/search', (req, res) => {
//   // parameter => req.query
//   return res.render('search')
// });

// app.post('/search', (req, res) => {
//   // form data => req.body
//   console.log(req.body)
//   return res.send('search')
// });

//* server running
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
