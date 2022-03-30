const http = require("http");
const fs = require("fs");
require("dotenv").config();

const serveAllRequests = function (req, res) {
  let statusCode;
  let fileBuffer;
  const fileName = req.url == "/" ? "/index.html" : req.url;
  switch (req.method) {
    case "GET":
      res.setHeader("Content-Type", "text/html");
      break;
    case "POST":
      res.setHeader("Content-Type", "application/json");
      break;
  }
  fs.readFile(__dirname + fileName, function (err, buffer) {
    if (err) {
      statusCode = 404;
      fileBuffer = "File not Found";
    } else {
      console.log(req.method);
      statusCode = 200;
      fileBuffer = buffer;
    }
    res.writeHead(statusCode);
    res.end(fileBuffer);
  });
};
const server = http.createServer(serveAllRequests);
server.listen( process.env.PORT, "localhost", function () {
  console.log(process.env.MSG_SERVER_START + process.env.PORT);
});
