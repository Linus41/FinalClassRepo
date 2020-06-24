module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define("Book", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    synopsis: {
      type: DataTypes.TEXT,
    },
  });

  Book.associate = function (models) {
    Book.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Book;
};
