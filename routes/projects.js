const router = require("express").Router();
const database = require("../config/database");
const Project = require("../models/project");

router.route("/projs").get(async (req, res) => {
  try {
    const project = await Project.findAll();
    res.json(project);
  } catch (err) {
    console.log(err);
    res.status(400).json("Error: " + err);
  }
});

router.route("/projectAdd").post(async (req, res) => {
  const { projectname, rate, hoursperweek, projectinfo, status } = req.body;
  try {
    const response = await Project.create({
      projectname,
      rate,
      hoursperweek,
      projectinfo,
      status
    });
    res.json(response);
  } catch (err) {
    console.log("Error: " + err);
  }
});

router.route("/delete/:id").delete(async (req, res) => {
  try {
    const project = await Project.destroy({ where: { id: req.params.id } });
    if (!project) {
      res.send("There is no such developer in the DB");
      return;
    }
    res.send("Project deleted");
  } catch (err) {
    console.log("Error: " + err);
  }
});

module.exports = router;
