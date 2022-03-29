const cp = require("child_process");

console.log("1: Start");

const newProcess = cp.spawn("node", ["fibonacci.js"], {
  stdio: "inherit",
});
console.log("2: End");
