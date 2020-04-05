const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  email: {
    type: String,
    required: "Email address is required",
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email address"]
  },
  firstName: {
    type: String,
    trim: true,
    required: "firstName is Required"
  },
  lastName: {
    type: String,
    trim: true,
    required: "lastName is Required"
  },
  birthday: {
    type: Date,
    required: "birthday is Required"
  },
  savedArticles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Article"
    }
  ],
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note"
    }
  ],
  created: { type: Date, required: true, default: Date.now() },
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", User);
