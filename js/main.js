const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./Frontend/Home/index.html"));
});

app.use((req, res) => {
  res.status(404).send("Page is not found!");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
