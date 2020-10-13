const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.patch('/restored/:id', courseController.restoredCourse);
router.delete('/delete/:id', courseController.deleteCourse);
router.delete('/force/:id', courseController.forceDeleteCourse);
router.put('/update/:id', courseController.updateCourse);
router.get('/edit/:id', courseController.editCourse);
router.get('/create', courseController.createCourse);
router.post('/store', courseController.store);
router.get('/:slug', courseController.showCourse);

module.exports = router;
