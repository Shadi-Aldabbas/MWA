const express = require("express");
const router = express.Router();
const controller = require("../Controller/game.controller");

router.route("/games/:id")
  .get(controller.getAll)
  
router.route("/games")
  .get(controller.getAll)
  .post(controller.addOne);
module.exports = router;
