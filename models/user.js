'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstname: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    lastname: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_login: DataTypes.DATE
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};