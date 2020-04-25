// Dependencies
// =============================================================
const mysql = require("mysql");
const express = require("express");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create a connection to the DB
const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "playlistDB"
});

// Initiates the connection to the DB
// =============================================================
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});

/**
 * Gets us all the songs!
 */
app.get("/api/songs", (req, res) => {
  connection.query("SELECT * FROM songs", function (err, songsData) {
    if (err) throw err;
    res.send(songsData)
  });
})

/**
 * Gets us all the songs, PLUS the artists!
 */
app.get("/api/songsWithArtists", (req, res) => {
  connection.query("SELECT * FROM songs INNER JOIN artists ON songs.artistId = artists.id", function (err, songsData) {
    if (err) throw err;
    res.send(songsData)
  });
})

/**
 * Gets us all the songs, PLUS the artists, PLUS the genres!
 */
app.get("/api/songsWithArtistsAndGenre", (req, res) => {
  connection.query("SELECT * FROM songs INNER JOIN artists ON songs.artistId = artists.id INNER JOIN genres ON songs.genreId = songs.id", function (err, songsData) {
    if (err) throw err;
    res.send(songsData)
  });
})


