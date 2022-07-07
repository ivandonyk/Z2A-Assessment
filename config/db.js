const { Sequelize } = require('sequelize');

const { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } = process.env

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
	host: DB_HOST,
	dialect: 'mysql' 
})

module.exports = db