const express = require("express");
const router = express.Router();
const gamesController = require("../Controller/game.controller");
const publisherController = require("../Controller/publisher.controllers");
// const reviewsController = require("../controllers/reviews.controllers");

// router.route("/games/:gameId/reviews/:reviewId")
//   .get(publisherController.getAll);

// router.route("/games/:gameId/reviews")
//   .get(publisherController.getAll);


router.route("/games/:gameId/publisher")
  .get(publisherController.getOne)
  .post(publisherController.addOne)
  .put(publisherController.fullUpdateOne)
  .delete(publisherController.deleteOne);


router.route("/games/:gameId")
  .get(gamesController.getOne)
  .put(gamesController.fullUpdateOne)
  .patch(gamesController.partialUpdateOne)
  .delete(gamesController.deleteOne);


router.route("/games/")
  .get(gamesController.getAll)
  .post(gamesController.addOne);

module.exports = router;
