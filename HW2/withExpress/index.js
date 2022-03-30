require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
app.set("port", process.env.PORT);

app.use(express.static(path.join(__dirname, "public")));

app.post("/", function (req, res) {
  res.status(200).json({ response: "index.html" });
});
app.post("/index.html", function (req, res) {
  res.status(200).json({ response: "index.html" });
});
app.post("/page2.html", function (req, res) {
  res.status(200).json({ response: "page2.html" });
});
app.post("/page1.html", function (req, res) {
  res.status(200).json({ response: "page1.html" });
});

const server = app.listen(app.get("port"), function () {
  console.log(process.env.MSG_SERVER_START + app.get("port"));
});
