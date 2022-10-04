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
    "Job Title": {
      type: String,
    },

    "Company Name": {
      type: String,
    },
    Location: {
      type: String,
    },

    Salary: {
      type: String,
    },

    "Publishing Date": {
      type: String,
    },

    "Job Description": {
      type: String,
    },

    Remote: {
      type: String,
    },

    Technology: {
      type: String,
    },

    Source: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job Board", dataSchema);
