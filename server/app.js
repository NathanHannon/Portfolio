// [START gae_flex_postgres_app]
const createError = require('../node_modules/http-errors');
const express = require('../node_modules/express');
const path = require('path');
const cookieParser = require('../node_modules/cookie-parser');
const logger = require('../node_modules/morgan');
const cors = require("../node_modules/cors");

const app = express();
app.enable('trust proxy');

//---------------Routers-----------------
var projectRouter = require("./routes/projects")

//use required packages
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// app.listen(3000);

//use create route api
app.use("/api/", projectRouter);

module.exports = app;
