'use strict';

const passwordHash = require('password-hash');

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Users', [
      {
        email: 'ivan.yarymovych@gmail.com',
        password: passwordHash.generate('Qq111'),
        isActivate: true,
        profileId: 1,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        email: 'bogdan.yarymovych@gmail.com',
        password: passwordHash.generate('Ww222'),
        isActivate: true,
        profileId: 2,
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
    ]),
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Users', null)
};
