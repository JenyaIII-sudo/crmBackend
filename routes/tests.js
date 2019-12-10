const express = require("express");
const router = express.Router();
const database = require("../config/database");
const test = require("../models/test");

/* GET test list */
router.get("/", (req, res) =>
  test
    .findAll()
    .then(tests => {
      res.render("tests", {
        tests
      });
    })
    .catch(err => console.log(err))
);

//Add a test
router.get("/add", (req, res) => {
  const data = {
    name: "Keka",
    email: "zoro9443@gmail.com",
    skype: "zoro944",
    telephone: "+7212513831",
    status: "middle"
  };
  let { name, email, skype, telephone, status } = data;

  //Insert into table
  test
    .create({
      name,
      email,
      skype,
      telephone,
      status
    })
    .then(test => res.redirect("/tests"))
    .catch(err => console.log(err));
});

module.exports = router;
