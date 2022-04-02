const mongoose = require("mongoose");
const { courseSchema } = require("./course-model");
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  GPA: {
    type: Number,
    min: 0.0,
    max: 4.0,
  },
  course: courseSchema


});
mongoose.model("Student", studentSchema, "Students");
module.exports={
  studentSchema
  }