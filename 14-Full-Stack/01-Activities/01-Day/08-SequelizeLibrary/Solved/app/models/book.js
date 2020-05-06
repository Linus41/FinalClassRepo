module.exports = function (sequelize, DataTypes) {
    var Book = sequelize.define("Book", {
        // Actual Model
        author: DataTypes.STRING,
        body: DataTypes.STRING,
		genre:DataTypes.STRING,
		pages: DataTypes.INTEGER

    });
    
    return Book;
};
