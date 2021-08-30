const express = require("express");
const fs = require("fs");
const morgan = require("morgan");

// create express app
const app = express();

app.use(morgan('tiny'));

// define a simple route
app.get("/", (req, res) => {
  res.json(JSON.parse(fs.readFileSync("./data.json", "utf8")));
});
app.get("/data", (req, res) => {
  res.json(JSON.parse(fs.readFileSync("./data.json", "utf8"))).data;
});

// POST route
app.post("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data.json", "utf8")).data;
  data.push(req.body);
  fs.writeFileSync("./data.json", JSON.stringify(data));
  res.json(data);
});

// DELETE route
app.delete("/:id", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data.json", "utf8")).data;
  data.splice(req.params.id - 1, 1);
  fs.writeFileSync("./data.json", JSON.stringify(data));
  res.json(data);
});

// PUT route
app.put("/:id", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data.json", "utf8")).data;
  data[req.params.id - 1] = req.body;
  fs.writeFileSync("./data.json", JSON.stringify(data));
  res.json(data);
});

// PATCH route
app.patch("/:id", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data.json", "utf8")).data;
  data[req.params.id - 1] = req.body;
  fs.writeFileSync("./data.json", JSON.stringify(data));
  res.json(data);
});

// Get ID route
app.get("/:id", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data.json", "utf8")).data;
  res.json(data[req.params.id - 1]);
});

// listen for requests
app.listen(3210, () => {
  console.log("Server is listening on port 3210");
});
