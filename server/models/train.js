"use strict";
module.exports = (sequelize, DataTypes) => {
  const train = sequelize.define(
    "train",
    {
      nameTrain: DataTypes.STRING,
      typeTrain: DataTypes.INTEGER,
      dateStart: DataTypes.STRING,
      startStation: DataTypes.STRING,
      startTime: DataTypes.STRING,
      destinationStation: DataTypes.STRING,
      arrivalTime: DataTypes.STRING,
      price: DataTypes.INTEGER,
      qty: DataTypes.INTEGER
    },
    {}
  );
  train.associate = function(models) {
    train.belongsTo(models.type, { foreignKey: "typeTrain" });
  };
  return train;
};
