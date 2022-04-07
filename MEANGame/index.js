require("dotenv").config();
require("./api/data/db.js");

const express = require("express");
const path = require("path");
const routes = require("./api/routes");
const app = express();

app.set("port", process.env.PORT);

app.use("/api", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, XRequested-With, Content-Type, Accept');
  next();
});

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", routes);

const server = app.listen(app.get("port"), function () {
  console.log(process.env.MSG_SERVER_START + server.address().port);
});
