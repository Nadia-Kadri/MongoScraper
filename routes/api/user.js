const passport = require("passport");
const express = require("express");
const router = express.Router();
const db = require("../../models");
var isAuthenticated = require("../../config/middleware/isAuthenticated");

// Post route for registering a user account
router.post("/register", function(req, res) {
  console.log("registering user");

  db.User.register(
    new db.User({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birthday: req.body.birthday,
      username: req.body.username
    }),
    req.body.password,
    function(err, user) {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      passport.authenticate("local")(req, res, function(data) {
        res.json(req.user);
      })
    }
  );
});

router.post("/login", function(req, res, next) {
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json(info);
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.json(user);
    });
  })(req, res, next);
});

router.get("/logout", function(req, res) {
  req.logout();
  res.json({ message: "logged out" });
});

router.get("/username", function(req, res) {
  console.log("available username");
  if (req.query.username) {
    db.User.find({ username: req.query.username })
      .then(result => {
        res.json({ length: result.length });
      })
      .catch(err => res.status(422).json(err));
  } else {
    res.json({ message: "no username entered for query" });
  }
});

router.get("/authorized", isAuthenticated, function(req, res) {
  res.json(req.user);
});

// Put route for users to save an article
router.put("/save/article/:articleId", isAuthenticated, function(req, res) {
  db.User.findOneAndUpdate({ _id: req.user._id }, { $addToSet: { savedArticles: req.params.articleId } }, { new: true })
    .then(result => {
      console.log(result)
      res.json(result)
    })
    .catch(err => console.log(err.message));
});

// Put route for users to delete a saved article
router.put("/delete/article/:articleId", isAuthenticated, function(req, res) {
  db.User.findOneAndUpdate({ _id: req.user._id }, { $pull: { savedArticles: req.params.articleId } }, { new: true })
    .then(result => {
      console.log(result)
      res.json(result)
    })
    .catch(err => console.log(err.message));
});

// Get route for Users to view their saved articles
router.get("/view/articles", isAuthenticated, function(req, res) {
  console.log("saved articles");
  
  db.User.find({ _id: req.user._id })
    .populate("savedArticles")
    .then(result => {
      console.log(result)
      res.json(result)
    })
    .catch(err => console.log(err.message));
});

// Get route for Users to view their notes by article
router.get("/view/notes/:articleId", isAuthenticated, function(req, res) {
  console.log("saved notes");
  
  db.Note.find({ user: req.user._id , article: req.params.articleId })
    .then(result => {
      console.log(result)
      res.json(result)
    })
    .catch(err => console.log(err.message));
});


// Post route for adding a note
router.post("/add/note", isAuthenticated, function(req, res) {
  console.log("creating note");

  db.Note.create({ 
    body: req.body.body, 
    article: req.body.article, 
    user: req.user._id
   })
  .then(result => {
    console.log("note created")

    db.User.findOneAndUpdate({ _id: result.user }, { $addToSet: { notes: result._id } }, { new: true })
      .then(() => console.log("Note pushed to User"))
      .catch(err => console.log(err.message))

    db.Article.findOneAndUpdate({ _id: result.article }, { $addToSet: { notes: result._id } }, { new: true })
      .then(() => console.log("Note pushed to Article"))
      .catch(err => console.log(err.message))

    res.send(result)
  })
  .catch(err => console.log(err.message));
});

// Delete route for users to delete a note
router.delete("/delete/note/:noteId/:articleId", function(req, res) {
  console.log("Deleting note");
  db.Note.deleteOne({ _id: req.params.noteId })
    .then(result => {
      console.log("Note deleted")

      db.User.findOneAndUpdate({ _id: req.user._id }, { $pull: { notes: req.params.noteId } }, { new: true })
        .then(() => console.log("Note removed from User"))
        .catch(err => console.log(err.message))

      db.Article.findOneAndUpdate({ _id: req.params.articleId }, { $pull: { notes: req.params.noteId } }, { new: true })
        .then(() => console.log("Note removed from Article"))
        .catch(err => console.log(err.message))

      res.json(result)
    })
    .catch(err => console.log(err.message));
});

module.exports = router;