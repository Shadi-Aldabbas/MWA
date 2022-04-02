const mongoose = require("mongoose");
const courseSchema = mongoose.Schema({
  name: {
    type: String,
  },
});
mongoose.model("Course", courseSchema);
module.exports = {
  courseSchema,
};
