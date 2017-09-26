'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Profiles', [
      {
        firstName: 'Bogdan',
        lastName: 'Yarymovych',
        birthDate: '1994-07-02',
        address: 'Sheptyckogo street, 46',
        city: 'Lviv',
        country: 'Ukraine',
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        firstName: 'Roman',
        lastName: 'Kulyk',
        birthDate: '1996-06-17',
        address: 'Nova street, 2',
        city: 'Novyi Rozdil',
        country: 'Ukraine',
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
    ]),
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Profiles', null)
};
