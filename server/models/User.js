const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  department: {
    type: String,
    default: "",
  },

  club: {
    type: String,
    default: "",
  },

  role: {
    type: String,
    default: "admin",
  },
});

module.exports = mongoose.model("User", userSchema);