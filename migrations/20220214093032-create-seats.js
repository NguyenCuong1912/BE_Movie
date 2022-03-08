'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seatName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bookded: {
        type: Sequelize.BOOLEAN,
      },
      idRoom: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Rooms',
          key: 'id'
        }
      },
      idUser: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      idShowTime: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ShowTimes',
          key: 'id'
        }
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
    await queryInterface.dropTable('Seats');
  }
};
