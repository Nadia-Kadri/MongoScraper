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
  db.User.findOneAndUpdate({ _id: req.user._id }, { $push: { savedArticles: req.params.articleId } }, { new: true })
    .then(result => {
      console.log(result)
      res.json(result)
    })
    .catch(err => console.log(err.message));
  // db.Article.findOneAndUpdate({ _id: req.params.articleId }, { $push: { users: req.user._id } }, { new: true })
  //   .then(result => {
  //     console.log(result)
  //     res.json(result)
  //   })
  //   .catch(err => console.log(err.message));
});


module.exports = router;