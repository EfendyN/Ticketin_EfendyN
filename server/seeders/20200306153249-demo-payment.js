"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "payments",
      [
        {
          trainId: 1,
          userId: 1,
          qty: 1,
          totalPrice: 100000,
          status: "pending"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("payments", null, {});
  }
};
