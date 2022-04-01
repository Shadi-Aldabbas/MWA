const dbConnection = require("../data/dbconnection");

module.exports.getStudents = (req, res) => {
  const db = dbConnection.get();
  const collection = db.collection("games");
  let offset = 0;
  let count = 3;
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }
  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }
  count = count > 10 ? 10 : count;
  collection.find().skip(offset).limit(count).toArray(function (err, games) {
    res.status(200).json(games);
  });
};
