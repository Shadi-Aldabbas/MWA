const mongoose = require("mongoose");
const Student = mongoose.model(process.env.STUDENT_MODEL);

const getAllStudent = (req, res) => {
  let offset = 0;
  let count = 5;
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }
  if (req.query && req.query.count) {
    offset = parseInt(req.query.count, 10);
  }
  Student.find()
    .skip(offset)
    .limit(count)
    .exec(function (err, students) {
      console.log(students);
      res.json(students);
    });
};

const getStudent = (req, res) => {
  const studentId = req.params.studentId;
  console.log(studentId);
  Student.findById(studentId).exec(function (err, student) {
    res.status(200).json(student);
  });
};

module.exports = {
  getAllStudent,
  getStudent
};
