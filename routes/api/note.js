const express = require("express");
const router = express.Router();
const db = require("../../models");

// Post route for creating a note
router.post("/create", function(req, res) {
  console.log("creating note");

  db.Note.create({ 
    body: req.body.body, 
    article: req.body.article, 
    user: req.body.user
   })
  .then(result => {
    console.log("note created")
    res.send(result)
  })
  .catch(err => console.log(err.message));
});

module.exports = router;