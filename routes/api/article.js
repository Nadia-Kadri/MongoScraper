const express = require("express");
const router = express.Router();
const db = require("../../models");

// Post route for creating an article
router.post("/create", function(req, res) {
  console.log("creating note");

  db.Article.create({ 
    title: req.body.title, 
    summary: req.body.summary, 
    link: req.body.link
   })
  .then(result => {
    console.log("article created")
    res.send(result)
  })
  .catch(err => console.log(err.message));
});

module.exports = router;