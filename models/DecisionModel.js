const { Timestamp } = require("mongodb");
let mongoose = require("mongoose");
let dataSchema = new mongoose.Schema(
  {
    "First Name": {
      type: String,
    },

    "Last Name": {
      type: String,
    },

    "Company Name": {
      type: String,
    },

    "Profile URL": {
      type: String,
    },

    Location: {
      type: String,
    },

    Source: {
      type: String,
    },

    Designation: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Decision Maker", dataSchema);
