'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ShowTimes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idFilm: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Films',
          key: 'id'
        }
      },
      idCinema: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Cinemas',
          key: 'id'
        }
      },
      idRoom: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Rooms',
          key: 'id'
        }
      },
      showDate: {
        type: Sequelize.DATE,
        allowNull: false
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
    await queryInterface.dropTable('ShowTimes');
  }
};
