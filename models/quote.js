'use strict';
module.exports = (sequelize, DataTypes) => {
  var Quote = sequelize.define('Quote', {
    author: DataTypes.STRING,
    quote: DataTypes.STRING
  }, {});
  Quote.associate = function(models) {
    // associations can be defined here
  };
  return Quote;
};