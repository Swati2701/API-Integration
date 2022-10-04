const express = require("express");
const router = express.Router();
const CSVToJSON = require("csvtojson");

const JobModel = require("../models/jobModel.js");
const CompanyModel = require("../models/companyModel.js");
const DecisionModel = require("../models/DecisionModel.js");

router.get("/getAll", async (req, res) => {
  try {
    const data = await JobModel.find();

    let object = [];
    let Name;

    for (let i = 0; i < data.length; i++) {
      if (data[i]["First Name"] === "NaN" && data[i]["Last Name"] === "NaN") {
        Name = "Not Provided";
      } else {
        Name = data[i]["First Name"] + " " + data[i]["Last Name"];
      }

      object.push({
        Name: Name,
        "Job Title": data[i]["Job Title"],
        "Company Name": data[i]["Company Name"],
        Location: data[i].Location,
      });
    }

    res.json({ "Employee Details": object });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//to dump Job data into mongodb
router.post("/post/job", async (req, res) => {
  CSVToJSON()
    .fromFile("step3.csv")
    .then((csvData) => {
      // console.log(csvData);

      JobModel.insertMany(csvData)
        .then(function () {
          console.log("Data Inserted");
          res.json({ Success: " sucess" });
        })
        .catch(function (error) {
          res.status(500).json({ message: error.message });
        });
    });
});

router.post("/post/company", async (req, res) => {
  CSVToJSON()
    .fromFile("step3.csv")
    .then((csvData) => {
      CompanyModel.insertMany(csvData)
        .then(function () {
          console.log("Data Inserted");
          res.json({ Success: " sucess" });
        })
        .catch(function (error) {
          res.status(500).json({ message: error.message });
        });
    });
});

router.post("/post/decision", async (req, res) => {
  CSVToJSON()
    .fromFile("step3.csv")
    .then((csvData) => {
      DecisionModel.insertMany(csvData)
        .then(function () {
          console.log("Data Inserted");
          res.json({ Success: " sucess" });
        })
        .catch(function (error) {
          res.status(500).json({ message: error.message });
        });
    });
});

module.exports = router;
