"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "types",
      [
        {
          name: "executive"
        },
        {
          name: "economy"
        },
        {
          name: "business"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("types", null, {});
  }
};
