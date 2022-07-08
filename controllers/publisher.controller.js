const Publisher = require('../models/publisher')

const createPublisher = async () => {
	const dummyPublisher = {
		title: 'publisher title', 
		postbackLink: 'https://google.com/search?q=postbackLink', 
		user: 'new user', 
		password: 'new password'
	}
	await Publisher.create(dummyPublisher)
}

const getPublishers = async () =>  await Publisher.findAll()

module.exports = {
	createPublisher,
	getPublishers
}