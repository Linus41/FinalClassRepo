DROP DATABASE IF EXISTS playlistDB;
CREATE DATABASE playlistDB;

USE playlistDB;

CREATE TABLE artists(
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(45) NULL,
    lastName VARCHAR(45) NULL,
    PRIMARY KEY (id)
);


CREATE TABLE songs(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  genre VARCHAR(45) NULL,
  artistId INT,
  PRIMARY KEY (id),
  FOREIGN KEY(artistId) REFERENCES artists(id)
);

INSERT INTO artists (firstName, lastName)
VALUES ("Justin", "Beiber");

INSERT INTO artists (firstName, lastName)
VALUES ("Britney", "Spears");

INSERT INTO artists (firstName, lastName)
VALUES ("Billie", "Eilish");


INSERT INTO songs (title, artistId, genre)
VALUES ("Wheare Are U Now", 1, "Dance");

INSERT INTO songs (title, artistId, genre)
VALUES ("I Don't Care", 1, "Dance");

INSERT INTO songs (title, artistId, genre)
VALUES ("Toxic",  2, "Dance");

INSERT INTO songs (title, artistId, genre)
VALUES ("No Time to Die", 3, "Soundtrack");

SELECT * FROM artists;

SELECT * FROM songs;

SELECT * FROM songs 
INNER JOIN artists on songs.artistId = artists.id;

SELECT songs.title, songs.genre, artists.firstName, artists.lastName FROM songs 
INNER JOIN artists on songs.artistId = artists.id;