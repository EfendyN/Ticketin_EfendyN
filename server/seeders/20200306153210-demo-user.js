"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Nico",
          username: "ncfndy",
          user_level: "admin",
          email: "nicoefendy22@gmail.com",
          password: "nico001",
          gender: "male",
          phone: "087887235590",
          address: "bekasi"
        },
        {
          name: "Bryan",
          username: "Harkon",
          user_level: "user",
          email: "bryanpucek@gmail.com",
          password: "bryan001",
          gender: "male",
          phone: "087887235590",
          address: "tanggerang"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
