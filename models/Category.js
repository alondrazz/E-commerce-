const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
       },
      quantity: {
        type: DataTypes. INTEGER,
        allowNull: false,
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
