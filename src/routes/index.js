const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');
const meRouter = require('./me');

function route(app) {
  app.use('/me', meRouter);
  app.use('/courses', courseRouter);
  app.use('/news', newsRouter);
  app.use('/', siteRouter);

  // app.get('/', (req, res) => {
  //   return res.render('home')
  // });

  // app.get('/search', (req, res) => {
  //   // parameter => req.query
  //   return res.render('search')
  // });

  // app.get('/news', (req, res) => {
  //   return res.render('news')
  // });

  // app.post('/search', (req, res) => {
  //   // form data => req.body
  //   console.log(req.body)
  //   return res.send('search')
  // });
}

module.exports = route;
