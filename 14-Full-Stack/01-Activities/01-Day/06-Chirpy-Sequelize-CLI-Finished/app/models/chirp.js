// We are exporting a function that takes in our sequelize instance, plus the sequelize DataTypes... (this lets use use different styles of db!)
module.exports = function (sequelize, DataTypes) {
    var Chirp = sequelize.define("Chirp", {
        // Actual Model
        author: DataTypes.STRING,
        body: DataTypes.STRING

    });

    return Chirp;
};
