module.exports = function (sequelize, DataTypes) {
    var Review = sequelize.define("Review", {
        // Giving the Author model a name of type STRING
        rating: {
            type: DataTypes.INTEGER
        }
    });

    Review.associate = function (models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        models.Review.belongsTo(models.User, {

        });
        models.Review.belongsTo(models.Movie, {

        });

    };

    return Review;
};