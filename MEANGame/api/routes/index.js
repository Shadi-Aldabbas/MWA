const express = require("express");
const router = express.Router();
const controller = require("../Controller/game.controller");

router.route("/json")
  .get(controller.getAll)
  .post();
module.exports = router;
