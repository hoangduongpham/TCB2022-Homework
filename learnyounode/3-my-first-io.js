const fs = require("fs");

const file = fs.readFileSync(process.argv[2]);
const data = file.toString();
console.log(data.split("\n").length - 1);
