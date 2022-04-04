require("dotenv").config();
require("./api/data/db.js");
const express = require("express");
const routes = require("./api/routes");
const app = express();

app.set("port", process.env.PORT);


// setup the express HttpRequest data parser middlewares
// parse application/x-www-form-urlencoded (e.g. web form data)
app.use(express.urlencoded({ extended: false }));
// parse HttpRequest data to application/json format
app.use(express.json());


app.use("/api", routes);

const server = app.listen(app.get("port"), function () {
  console.log(process.env.MSG_SERVER_START + server.address().port);
});
