const express = require("express");
const router = express.Router();
const controller = require("../Controller/student.controller");

router.route("/students").get(controller.getStudents);
module.exports = router;
