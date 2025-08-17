// async & await function!!!

// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// the cleanest, and best way to handel the event loop
// const { readFile, writeFile } = require("fs").promises;
// const start = async () => {
//   try {
//     const first = await readFile("./test/first.txt", "utf8");
//     const secound = await readFile("./test/secound.txt", "utf8");
//     await writeFile("./test/result.txt", first + secound);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, result) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(result);
//     });
//   });
// };

// getText("./test/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// const EventEmiter = require("events");
// const eventEmiter = new EventEmiter();

// eventEmiter.on("res", () => {
//   console.log(`data recived`);
// });
// eventEmiter.emit("res");

const { createReadStream } = require("fs");
const stream = createReadStream("./test/result.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

stream.on("data", (result) => {
  console.log(result);
});

stream.emit("data");
