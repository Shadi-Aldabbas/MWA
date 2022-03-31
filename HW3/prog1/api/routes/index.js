const express = require("express");
const router = express.Router();
const controller = require("../Controller/sum.controller");

router.route("/sum/:num1")
  .post(controller.sum);
module.exports = router;
