const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./test/first.txt", "utf8");

// we can use the old way
// const fs  = require("fs")
// const first = fs.readFileSync("./test/first.txt", "utf8")
console.log(first)

