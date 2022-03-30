require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
app.set("port", process.env.PORT);

app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(app.get("port"), function () {
  console.log(process.env.MSG_SERVER_START + server.address().port);
});
