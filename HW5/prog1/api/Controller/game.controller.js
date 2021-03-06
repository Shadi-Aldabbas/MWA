const mongoose = require("mongoose");
const Game = mongoose.model(process.env.GAME_MODEL);

const getAll = function (req, res) {
  let offset = 0;
  let count = 5;
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }
  if (req.query && req.query.count) {
    offset = parseInt(req.query.count, 10);
  }
  Game.find()
    .skip(offset)
    .limit(count)
    .exec(function (err, games) {
      res.json(games);
    });
};

const getOne = (req, res) => {
  const gameId = req.params.gameId;
  console.log(gameId);
  Game.findById(gameId).exec(function (err, game) {
    res.status(200).json(game);
  });
};

module.exports = {
  getAll,
  getOne,
};
