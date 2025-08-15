const { readFile, writeFile } = require("fs");

readFile("./Backend/test/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});

writeFile("./Backend/test/secound.txt", "Hello There!", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
});
