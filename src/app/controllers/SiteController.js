const Course = require('../models/Course');

// de route chung, home, search

class SiteController {
  // TODO [GET] /
  index(req, res, next) {
    Course.find({}, function(err, courses) {
      if (!err) {
        // res.json(courses);
        courses = JSON.parse(JSON.stringify(courses));

        res.render('home', { courses });
        return;
      }
      next(err);
    });

  }

  // TODO [GET] /serach
  search(req, res) {
    res.render('search');
  }

  // TODO [POST] /search
  register(req, res) {

    console.log(req.body);
    return res.send('search');
  }
}

module.exports = new SiteController();
