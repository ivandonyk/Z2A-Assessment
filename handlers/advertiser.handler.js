const Advertiser = require('../models/advertiser')

const createAdvertiser = async () => {
	const dummyAdvertiser = {
		title: 'Advertiser title',
		structureLink: 'https://google.com/search?q=structureLink',
		platform: 'hello platform',
		api: 'testing api'
	}
	await Advertiser.create(dummyAdvertiser)
}

const getAdvertisers = async () => await Advertiser.findAll()

module.exports = {
	createAdvertiser,
	getAdvertisers
}