const express = require("express");
const router = express.Router();
const db = require("../../models");

// Post route for creating a user account
router.post("/create", function(req, res) {
  console.log("creating user");

  db.User.create({ 
    email: req.body.email, 
    password: req.body.password, 
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthday: req.body.birthday
   })
  .then(result => {
    console.log("user created")
    res.send(result)
  })
  .catch(err => console.log(err.message));
});

module.exports = router;