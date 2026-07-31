const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema(
  {
    title: {
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

    eventDate: {
      type: Date,
    },

    registrationLink: {
      type: String,
      default: "",
    },

    circular: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Announcement", announcementSchema);