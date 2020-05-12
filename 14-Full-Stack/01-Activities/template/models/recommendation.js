module.exports = function (sequelize, DataTypes) {
    var Recommendation = sequelize.define("Recommendation", {
        // Giving the Author model a name of type STRING
        title: {
            type: DataTypes.STRING
        },
        body: {
            type: DataTypes.TEXT
        }
    });

    Recommendation.associate = function (models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        models.Recommendation.belongsTo(models.User, {

        });
        models.Recommendation.belongsTo(models.Movie, {

        });

    };

    return Recommendation;
};