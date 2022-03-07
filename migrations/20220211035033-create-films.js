'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('films', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameFilm: {
        type: Sequelize.STRING
      },
      trailer: {
        type: Sequelize.STRING
      },
      imgFilm: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      rate: {
        type: Sequelize.STRING
      },
      comingSoon: {
        type: Sequelize.BOOLEAN
      },
      nowShowing: {
        type: Sequelize.BOOLEAN
      },
      showtime: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('films');
  }
};
