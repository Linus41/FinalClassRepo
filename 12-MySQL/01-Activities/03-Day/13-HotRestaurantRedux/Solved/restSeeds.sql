DROP DATABASE IF EXISTS hotRestaurantDB;
CREATE DATABASE hotRestaurantDB;

USE hotRestaurantDB;

CREATE TABLE tables(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NULL,
    email VARCHAR(45) NULL,
    phoneNumber VARCHAR(45) NULL,
    PRIMARY KEY (id)
);

INSERT INTO tables (name, email, phoneNumber)
VALUES ("David Lovett", "foo@foo.com", "123-456-7890");

INSERT INTO tables (name, email, phoneNumber)
VALUES ("John Doe", "foo2@foo2.com", "123-456-7890");


