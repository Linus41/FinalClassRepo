module.exports = function (sequelize, DataTypes) {
    var Genre = sequelize.define("Genre", {
        // Giving the Author model a name of type STRING
        name: {
            type: DataTypes.STRING
        },
        //icon? 
    });
//Movie.belongsToMany(Actor, { through: 'ActorMovies' });
    Genre.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      models.Genre.belongsToMany(models.Movie, { through: 'MovieGenre'
      });

    };

    return Genre;
};