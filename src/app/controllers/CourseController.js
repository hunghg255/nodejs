const Course = require('../models/Course');
const { json } = require('body-parser');

class CourseController {
  // TODO [GET] /courses/:slug
  showCourse(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/course', { course: JSON.parse(JSON.stringify(course)) });
      })
      .catch(next);
  }

   // TODO [GET] /courses/create
  createCourse(req, res, next) {
    console.log(req.body)
    res.render('courses/create');
  }

  //TODO [POST] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;

    const course = new Course(formData);
    course.save()
      .then(() => res.redirect('/'))
      .catch(next)
  }

  // TODO [GET] /courses/edit/:id
  editCourse(req, res, next) {
    const id = req.params.id;
    Course.findById(id)
      .then(course => res.render('courses/edit', { course: JSON.parse(JSON.stringify(course)) }))
      .catch(next);
  }

  // co PUT thi k can update
  // TODO [PUT] /courses/update/:id
  updateCourse(req, res, next) {
    const body = req.body;

    Course.updateOne({ _id: req.params.id }, body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }

  // TODO [DELETE] /courses/delete/:id
  deleteCourse(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  // TODO [DELETE] /force/:id
  forceDeleteCourse(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  // TODO [PATCH] /courses/restored/:id
  restoredCourse(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
}

module.exports = new CourseController();
