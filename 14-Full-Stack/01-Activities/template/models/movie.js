module.exports = function (sequelize, DataTypes) {
    var Movie = sequelize.define("Movie", {
        // Giving the Author model a name of type STRING
        title: {
            type: DataTypes.STRING
        },
        synopsis: {
            type: DataTypes.STRING
        },
        director: {
            type: DataTypes.STRING
        },
        releaseDate: {
            type: DataTypes.DATE
        }
    });

    Movie.associate = function (models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        models.Movie.belongsToMany(models.Genre, {
            through: 'MovieGenre'
        });
        models.Movie.belongsToMany(models.Actor, {
            through: 'MovieActor'
        });
    };

    return Movie;
};