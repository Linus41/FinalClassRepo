const mysql = require("mysql");
const inquirer = require("inquirer")

const SEED_DATA = `
INSERT INTO songs (title, artist, genre)
VALUES ("Human", "Krewella", "Dance"), ("TRNDSTTR","Black Coast", "Dance"), ("Who's Next", "The Who", "Classic Rock"), ("Yellow Submarine", "The Beatles", "Classic Rock");
`

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "playlistDB",

});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  inquirer.prompt([{
    type: "confirm",
    message: "Would you like to reseed the database?",
    name: "willSeed"
  }]).then(answers => {
    if (answers.willSeed) {
      seedDatabase();
    }
    inquirer.prompt([{
      type: "input",
      message: "What genre would you like to query for?",
      name: "genre"
    }]).then(secondAnswers => {
      querySongsByGenre(secondAnswers.genre)
      connection.end();
      return;
    });

  });

});

function queryAllSongs() {
  connection.query("SELECT * FROM songs", function (err, res) {
    if (err) throw err;
    res.forEach(product => {
      console.log(`${product.id} | ${product.title} | ${product.artist} | ${product.genre}`);
    })
    console.log("-----------------------------------");
  });
}

function seedDatabase() {
  connection.query("DELETE FROM songs", function (firstErr, firstRes) {
    if (firstErr) throw err;
    connection.query(SEED_DATA, function (secondErr, secondRes) {
      if (secondErr) throw err;
    })
  });
}

function querySongsByGenre(genre) {
  var query = connection.query("SELECT * FROM songs WHERE genre=?", [genre], function (err, res) {
    if (err) throw err;
    res.forEach(product => {
      console.log(`${product.id} | ${product.title} | ${product.artist} | ${product.genre}`);
    })
  });

  // logs the actual query being run
  console.log(query.sql);
}
