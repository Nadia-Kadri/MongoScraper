const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Article = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  summary: {
    type: String,
    unique: true
  },
  link: {
    type: String,
    unique: true,
    required: true
  },
  created: { 
    type: Date, 
    required: true, 
    default: Date.now() 
  },
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note"
    }
  ]
});

module.exports = mongoose.model("Article", Article);