const data = require("../../data/school.json");

module.exports.getSomeStu = (req, res) => {
  if (req.params && req.params.stuId) {
    res.status(200).json(data[req.params.stuId]);
  } else {
    res.status(200).json(data);
  }
};
