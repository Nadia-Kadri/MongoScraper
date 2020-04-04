const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Note = new Schema({
  body: {
    type: String,
    unique: true,
    required: true
  },
  created: { 
    type: Date, 
    required: true, 
    default: Date.now() 
  },
  article: {
    type: Schema.Types.ObjectId,
    ref: "Article"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Note", Note);