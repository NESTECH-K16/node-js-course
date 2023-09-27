'use strict'

const { DataTypes } = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */

		await queryInterface.bulkInsert(
			'Products',
			[
				{
					title: 'Product1',
					price: 200,
					description: 'Product1 description',
					image: 'http://image1.png',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Product2',
					price: 100,
					description: 'Product2 description',
					image: 'http://image2.png',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		)
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
}

