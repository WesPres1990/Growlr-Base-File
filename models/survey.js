'use strict';
module.exports = (sequelize, DataTypes) => {
  var Survey = sequelize.define('Survey', {
    url: DataTypes.STRING,
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    score: DataTypes.INTEGER,
    question1: DataTypes.STRING,
    question2: DataTypes.STRING,
    question3: DataTypes.STRING,
    question4: DataTypes.STRING,
    question5: DataTypes.STRING,
    question6: DataTypes.STRING,
    question7: DataTypes.STRING,
    question8: DataTypes.STRING,
    question9: DataTypes.STRING,
    question10: DataTypes.STRING
  }, {});
  Survey.associate = function(models) {
    // associations can be defined here
  };
  return Survey;
};