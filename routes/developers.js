const router = require("express").Router();
const database = require("../config/database");
const Developer = require("../models/developer");

router.route("/devs").get(async (req, res) => {
  try {
    const developer = await Developer.findAll();
    res.json(developer);
  } catch (err) {
    console.log(err);
    res.status(400).json("Error: " + err);
  }
});

router.route("/developerAdd").post(async (req, res) => {
  const { devname, email, skype, telephone, status, pic } = req.body;
  try {
    const dev = await Developer.findAll({ where: { email: email } });
    if (dev.length) {
      res.send(`User with this ${email} already exists`);
      return;
    }
    const response = await Developer.create({
      devname,
      email,
      skype,
      telephone,
      status,
      pic
    });
    res.json(response);
  } catch (err) {
    console.log("Error: " + err);
  }
});

module.exports = router;
