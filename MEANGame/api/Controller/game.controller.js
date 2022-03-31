const data = require("../../Data/games.json");

module.exports.getAll = (req, res) => {
  res.status(200).json({ data });
};
