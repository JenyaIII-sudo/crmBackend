const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");
const database = require("./config/database");
const cors = require("cors");

database
  .authenticate()
  .then(() => {
    console.log("Connection has been successfully");
  })
  .catch(err => {
    console.error("Unable to connect to the database", err);
  });

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`SERVER STARTED on PORT ${PORT}`));

app.get("/devs", require("./routes/developers"));
app.get("/projs", require("./routes/projects"));
app.use("/developers", require("./routes/developers"));
app.use("/projects", require("./routes/projects"));

module.exports = app;
