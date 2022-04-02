const express = require("express");
const router = express.Router();
const controller = require("../Controller/game.controller");

router.route("/games/:gameId")
  .get(controller.getOne)
  
router.route("/games")
  .get(controller.getAll)
module.exports = router;
