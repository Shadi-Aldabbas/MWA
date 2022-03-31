module.exports.sum = (req, res) => {
  let result = parseInt(req.params.num1) + parseInt(req.query.num2);
  res.status(200).json(result);
};
