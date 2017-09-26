'use strict';

const passwordHash = require('password-hash');

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Users', [
      {
        email: 'bogdan.yarymovych@gmail.com',
        password: passwordHash.generate('Qq@@11'),
        isActivate: true,
        profileId: 1,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        email: 'roma@gmail.com',
        password: passwordHash.generate('Qq@@11'),
        isActivate: true,
        profileId: 2,
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
    ]),
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Users', null)
};
