const router = require("express").Router();
const database = require("../config/database");
const Developer = require("../models/developer");

router.route("/").get(async (req, res) => {
  try {
    const developer = await Developer.findAll();
    res.json(developer);
  } catch (err) {
    console.log(err);
    res.status(400).json("Error: " + err);
  }
});

router.route("/add").post(async (req, res) => {
  const newDeveloper = await new developer({
    name: "Keka",
    email: "161russ",
    skype: "zoro",
    telephone: "+155819",
    status: "middle"
  });

  try {
    newDeveloper.save();
    res.json("Dev added");
  } catch (err) {
    console.log(err);
    res.status(400).json("Error: " + err);
  }
});

// router.get("/add", (req, res) => {
//   const data = {
//     name: "Keka",
//     email: "zoro9443@gmail.com",
//     skype: "zoro944",
//     telephone: "+7212513831",
//     status: "middle"
//   };
//   let { name, email, skype, telephone, status } = data;

//   //Insert into table
//   developer
//     .create({
//       name,
//       email,
//       skype,
//       telephone,
//       status
//     })
//     .then(crm => res.send("KUKU"))
//     .catch(err => console.log(err));
// });

// const newDeveloper = await new Developer({
//   name,
//   email,
//   skype,
//   telephone,
//   status
// });
// try {
//   newDeveloper.save();
//   res.json("Developer added!");
// } catch (err) {
//   console.log(err);
//   res.status(400).json("Error: " + err);
// }

module.exports = router;
