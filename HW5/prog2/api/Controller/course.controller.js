const mongoose = require("mongoose");
const Student = mongoose.model(process.env.STUDENT_MODEL);


const getAllCourse = (req, res) => {
  const studentId = req.params.studentId;
  let offset = 0;
  let count = 5;
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }
  if (req.query && req.query.count) {
    offset = parseInt(req.query.count, 10);
  }
  Student.findById(studentId).select("course").skip(offset)
    .limit(count).exec((err, student) => {
      console.log("Found course ", student.course, " for Student ", student);
      res.status(200).json(student.course);
    });
};

const getCourse = (req, res) => {
  const studentId = req.params.studentId;
  const courseId = req.params.courseId;
  console.log(courseId);
  Student.findById(studentId).select("course").exec(function (err, student) {
    res.status(200).json(student.course.id(courseId));
  });
};

module.exports = {
  getAllCourse,
  getCourse,
};