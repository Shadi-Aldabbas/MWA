const dbConnection = require("../data/dbconnection");

const getAll = (req, res) => {
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
  collection
    .find()
    .skip(offset)
    .limit(count)
    .toArray(function (err, games) {
      res.status(200).json(games);
    });
};

const addOne = (req, res) => {
  let newGame = {};
  console.log(req);
  if (req.body && req.body.title && req.body.price && req.body.minimmumNumberOfPlayers && req.body.minimmumAge) {
    console.log(req.body.title , req.body.price , req.body.minimmumNumberOfPlayers , req.body.minimmumAge);
    newGame.title = req.body.title;
    newGame.price = parseFloat(req.body.price);
    newGame.minimmumNumberOfPlayers = parseInt(req.body.minimmumNumberOfPlayers, 10);
    newGame.minimmumAge = parseInt(req.body.minimmumAge, 10);


    gamesCollection.insertOne(newGame,  (err, response) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        console.log(response);
        res.status(201).json(response);
      }
    });
  }else{
    res.status(500).json("err");
  }
};

module.exports = {
  getAll,addOne
}
