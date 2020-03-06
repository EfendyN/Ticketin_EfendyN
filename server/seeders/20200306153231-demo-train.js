"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "trains",
      [
        {
          nameTrain: "Argo Wilis",
          typeTrain: 1,
          dateStart: "06032020",
          startStation: "bekasi",
          startTime: "07:30",
          destinationStation: "jogja",
          arrivalTime: "12:00",
          price: 100000,
          qty: 10
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("trains", null, {});
  }
};
