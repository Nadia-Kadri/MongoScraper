const express = require("express");
const router = express.Router();
const db = require("../../models");

// Post route for creating a note
// router.post("/create", function(req, res) {
//   console.log("creating note");

//   db.Note.create({ 
//     body: req.body.body, 
//     article: req.body.article, 
//     user: req.body.user
//    })
//   .then(result => {
//     console.log("note created")

//     db.User.findOneAndUpdate({ _id: result.user }, { $addToSet: { notes: result._id } }, { new: true })
//       .then(() => console.log("Note pushed to User"))
//       .catch(err => console.log(err.message))

//     db.Article.findOneAndUpdate({ _id: result.article }, { $addToSet: { notes: result._id } }, { new: true })
//       .then(() => console.log("Note pushed to Article"))
//       .catch(err => console.log(err.message))

//     res.send(result)
//   })
//   .catch(err => console.log(err.message));
// });

module.exports = router;