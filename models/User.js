const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  email: {
    type: String,
    required: "Email address is required",
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email address"]
  },
  password: {
    type: String,
    required: "Password is required",
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

module.exports = mongoose.model("User", User);
