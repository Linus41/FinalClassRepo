module.exports = function (sequelize, DataTypes) {
    var Actor = sequelize.define("Actor", {
        // Giving the Author model a name of type STRING
        name: {
            type: DataTypes.STRING
        },
        //location? 
    });
//Movie.belongsToMany(Actor, { through: 'ActorMovies' });
    Actor.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      models.Actor.belongsToMany(models.Movie, { through: 'MovieActor'
      });

    };

    return Actor;
};