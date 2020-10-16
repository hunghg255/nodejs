const Course = require('../models/Course');

class MeController {
  // TODO [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render('me/stored-courses', {
          courses: JSON.parse(JSON.stringify(courses)),
        }),
      )
      .catch(next);
  }

  // TODO [GET] /me/trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) =>
        res.render('me/trash-courses', {
          courses: JSON.parse(JSON.stringify(courses)),
        }),
      )
      .catch(next);
  }
}

module.exports = new MeController();
