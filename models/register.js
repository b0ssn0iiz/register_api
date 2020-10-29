'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class register extends Model {
    static associate(models) {
    }
  };
  register.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'register',
    tableName: 'register'
  });
  return register;
};