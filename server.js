const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");
const database = require("./config/database");

database
  .authenticate()
  .then(() => {
    console.log("Connection has been successfully");
  })
  .catch(err => {
    console.error("Unable to connect to the database", err);
  });

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`SERVER STARTED on PORT ${PORT}`));

app.get("/", (req, res) => res.send("index"));
app.use("/developers", require("./routes/developers"));

module.exports = app;
