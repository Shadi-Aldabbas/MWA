const express = require("express");
const router = express.Router();
const gradesController = require("../controller/grades.controller");

router.route("/grades/:gradeId")
.get(gradesController.getOneGrade)
.delete(gradesController.deleteGrade)


router.route("/grades")
.get(gradesController.getListOfGrades)

module.exports = router;