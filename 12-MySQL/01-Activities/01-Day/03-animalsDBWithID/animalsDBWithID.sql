-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS animals_db;
-- Creates the "animals_db" database --
CREATE DATABASE animals_db;

-- Makes it so all of the following code will affect animals_db --
USE animals_db;

-- Creates the table "people" within animals_db --
CREATE TABLE people (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INTEGER AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(50) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
  has_pet BOOLEAN NOT NULL,
  -- Makes a sting column called "pet_name" --
  pet_name VARCHAR(50),
  -- Makes an numeric column called "pet_age" --
  pet_age INTEGER,
  -- Sets id as this table's primary key which means all data contained within it will be unique --
  PRIMARY KEY (id)
);


-- Creates new rows containing data in all named columns --
INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("David", TRUE, "Pecan", 3);

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("David", TRUE, "Tyrion from Seasons 1-4 only 'GigaChad' Lannister", 2);

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Brock", TRUE, "Moose", 2);

INSERT INTO people (name, has_pet)
VALUES ("Anthony", false);

-- Updates the row where the column name is Anthony... by selected by Id, however! --
UPDATE people
SET has_pet = true, pet_name = "DMS", pet_age = 500
WHERE id = 4;

SELECT * FROM people;
