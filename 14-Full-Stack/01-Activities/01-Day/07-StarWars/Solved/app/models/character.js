module.exports = function (sequelize, DataTypes) {
    var Character = sequelize.define("Character", {
        // Actual Model
        name: DataTypes.STRING,
        role: DataTypes.STRING,
		age:DataTypes.INTEGER,
		forcePoints: DataTypes.INTEGER,
        routeName: DataTypes.STRING
    });
    
    return Character;
};