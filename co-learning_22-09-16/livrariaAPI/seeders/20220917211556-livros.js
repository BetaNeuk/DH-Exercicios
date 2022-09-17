'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
   await queryInterface.bulkInsert('Livros', [
    {
      "title": "Diario de um banana",
      "pages": 214,
      "author": "Jeff Kinney"
    },
    {
      "title": "Codigo da Vinci",
      "pages": 250,
      "author": "Dan Brown"
    },
    {
      "title": "O diario de Anne Frank",
      "pages": 240,
      "author": "Anne Frank"
    }
   ]
   )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
