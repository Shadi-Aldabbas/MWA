require("dotenv").config();
require("./api/data/dbconnection").open();
const express = require("express");
const path = require("path");
const routes= require("./api/routes");
const app = express();

app.set("port", process.env.PORT);

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", routes);

const server = app.listen(app.get("port"), function () {
  console.log(process.env.MSG_SERVER_START + server.address().port);
});
