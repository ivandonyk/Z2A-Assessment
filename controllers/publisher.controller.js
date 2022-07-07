const Publisher = require('../models/publisher')

const createPublisher = async() => {
	const dummy = {title: 'new Title', postbackLink: 'new link', user: 'new user', password: 'new password'}
	await Publisher.create(dummy)
}

module.exports = {
	createPublisher
}