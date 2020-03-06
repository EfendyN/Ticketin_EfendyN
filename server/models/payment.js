"use strict";
module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define(
    "payment",
    {
      trainId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      totalPrice: DataTypes.INTEGER,
      status: DataTypes.STRING
    },
    {}
  );
  payment.associate = function(models) {
    payment.belongsTo(models.train, {
      foreignKey: "trainId"
    });
    payment.belongsTo(models.user, {
      foreignKey: "userId"
    });
  };
  return payment;
};
