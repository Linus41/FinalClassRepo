DROP DATABASE IF EXISTS hotRestaurantDB;
CREATE DATABASE hotRestaurantDB;

USE hotRestaurantDB;

CREATE TABLE tables(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    phoneNumber VARCHAR(45) NOT NULL,
    seated BOOLEAN NOT NULL, 
    PRIMARY KEY (id)
);

INSERT INTO tables (name, email, phoneNumber, seated)
VALUES ("David Lovett", "foo@foo.com", "123-456-7890", true);

INSERT INTO tables (name, email, phoneNumber, seated)
VALUES ("John Doe", "foo2@foo2.com", "123-456-7890", false);


