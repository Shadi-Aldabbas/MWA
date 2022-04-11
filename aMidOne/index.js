require("dotenv").config();
require("./api/data/db");
const express = require("express");
const routes = require("./api/routes");
const app = express();

app.set("port", process.env.PORT);

app.use("/api", (req,res,next) => {
    res.header('Access-Control-Allow-Origin','http://localhost:4200');
    res.header('Access-Control-Allow-Headers','Origin, XRequested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods',"GET, DELETE, POST, DELETE");
next();
});

app.use("/api",routes);

const server = app.listen(app.get("port"), () =>{
    console.log("start");
})