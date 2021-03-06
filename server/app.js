const express = require('../node_modules/express');
const path = require('path');
const logger = require('../node_modules/morgan');
const app = express();
app.enable('trust proxy');

//---------------Routers-----------------
var projectRouter = require("./routes/projects")

//use required packages
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// app.listen(3000);

//use create route api
app.use("/", projectRouter);

module.exports = app;