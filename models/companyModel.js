const { Timestamp } = require("mongodb");
let mongoose = require("mongoose");
let dataSchema = new mongoose.Schema(
  {
    "Job Title": {
      type: String,
    },

    "Company Name": {
      type: String,
    },

    Location: {
      type: String,
    },

    LinkedinURL: {
      type: String,
    },

    "Company URL": {
      type: String,
    },

    "Employee size Bucket": {
      type: String,
    },

    Industry: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("comapny Table", dataSchema);
