const mongoose = require("mongoose");
require("./jobs");
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", function () {
  console.log("Mongoose connected to " + process.env.DB_NAME);
});
mongoose.connection.on("disconnected", function () {
  console.log("Mongoose disconnected");
});
mongoose.connection.on("error", function (err) {
  console.log("Mongoose connection error " + err);
});


// SIGINT_MESSAGE= "Mongoose disconnected by app disconnect"
process.on("SIGINT", function () {
  mongoose.connection.close(function () {
    console.log(process.env.SIGINT_MESSAGE);
    process.exit(0);
  });
});


// SIGUSR2_MESSAGE= "Mongoose disconnected by app restart"
process.once("SIGUSR2", function() {
  mongoose.connection.close(function() {
    console.log(process.env.SIGUSR2_MESSAGE);
    process.kill(process.pid, "SIGUSR2");
  });
});


// SIGTERM_MESSAGE= "Mongoose disconnected by app termination"
process.on("SIGTERM", function () {
  mongoose.connection.close(function () {
    console.log(process.env.SIGTERM_MESSAGE);
    process.exit(0);
  });
});
