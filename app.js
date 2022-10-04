/* eslint-disable */

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const mongoURL = process.env.DATABASE_URL;
mongoose.connect(mongoURL);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();
app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});

const routes = require("./routes/routes");
const routes1 = require("./routes/route1");
app.use(express.json());

app.use("/api", routes);
app.use("/api", routes1);
module.exports = app;
