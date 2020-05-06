// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);

// This prevents the database from being wiped each time... or we can set it to true to blow it away!
let sequelizeConfiguration = {
  force: false
}

// Syncs Sequelize and Starts the server to begin listening
// =============================================================
db.sequelize.sync(sequelizeConfiguration).then(function () {
  console.log("Sequelize synced. Starting App.")
  app.listen(PORT, function () {
    console.log(`App listening on PORT:${PORT}, navigate to http://localhost:${PORT}`);
  });
})