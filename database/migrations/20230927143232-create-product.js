'use strict'

const { DataTypes } = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Products', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				type: Sequelize.STRING(100),
			},
			price: {
				type: Sequelize.INTEGER,
			},
			description: {
				type: Sequelize.STRING,
			},
			image: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: DataTypes.NOW,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: DataTypes.NOW,
			},
		})
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Products')
	},
}

