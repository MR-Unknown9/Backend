const { readFileSync, writeFileSync } = require("fs");
// sync
const first = readFileSync("./test/first.txt", "utf8");

// we can use the old way
// const fs  = require("fs")
// const first = fs.readFileSync("./test/first.txt", "utf8")
console.log(first)


// Async
const fs = require("fs");

fs.readFile("./Backend/js/test/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  fs.readFile("./Backend/js/test/secound.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const secound = result;
    fs.writeFile(
      "./Backend/js/test/result.txt",
      `the result is ${first}, ${secound}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
