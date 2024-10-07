'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Classroom', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        uuid: {
            type: Sequelize.UUID,
            allowNull: false,
            unique: true,
            defaultValue: Sequelize.UUIDV4
        },
        hasStarted: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal(`CURRENT_TIMESTAMP`)
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal(`CURRENT_TIMESTAMP`)
        }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Classroom')
  }
};
