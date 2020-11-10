const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  bday: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("author", authorSchema);
