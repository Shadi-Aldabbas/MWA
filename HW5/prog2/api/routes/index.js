const express = require("express");
const router = express.Router();
const studentController = require("../Controller/student.controller");
const courseController = require("../Controller/course.controller");


router.route("/students/:studentId/courses/:courseId")
  .get(courseController.getCourse)

router.route("/students/:studentId/courses")
  .get(courseController.getAllCourse)
  

router.route("/students/:studentId")
  .get(studentController.getStudent)
  
router.route("/students")
  .get(studentController.getAllStudent)
module.exports = router;
