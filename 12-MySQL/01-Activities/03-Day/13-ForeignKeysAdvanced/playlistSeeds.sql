DROP DATABASE IF EXISTS playlistDB;
CREATE DATABASE playlistDB;

USE playlistDB;

CREATE TABLE artists(
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(45) NULL,
    lastName VARCHAR(45) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE genres(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE songs(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  genreId INT NOT NULL,
  artistId INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(artistId) REFERENCES artists(id),
  FOREIGN KEY(genreId) REFERENCES genres(id)
);

INSERT INTO artists (firstName, lastName)
VALUES ("Justin", "Beiber");

INSERT INTO artists (firstName, lastName)
VALUES ("Britney", "Spears");

INSERT INTO artists (firstName, lastName)
VALUES ("Billie", "Eilish");

INSERT INTO genres (name)
VALUES ("Dance");

INSERT INTO genres (name)
VALUES ("Soundtrack");

INSERT INTO songs (title, artistId, genreId)
VALUES ("Wheare Are U Now", 1, 1);

INSERT INTO songs (title, artistId, genreId)
VALUES ("I Don't Care", 1, 1);

INSERT INTO songs (title, artistId, genreId)
VALUES ("Toxic",  2, 1);

INSERT INTO songs (title, artistId, genreId)
VALUES ("No Time to Die", 3, 2);

SELECT * FROM artists;

SELECT * FROM songs;

SELECT * FROM genres;

SELECT * FROM songs 
INNER JOIN artists on songs.artistId = artists.id;

SELECT * FROM songs 
INNER JOIN genres on songs.genreId = genres.id;

SELECT * FROM songs 
INNER JOIN artists on songs.artistId = artists.id
INNER JOIN genres on songs.genreId = genres.id;

SELECT songs.title, artists.firstName, artists.lastName, genres.name FROM songs 
INNER JOIN artists on songs.artistId = artists.id
INNER JOIN genres on songs.genreId = genres.id;