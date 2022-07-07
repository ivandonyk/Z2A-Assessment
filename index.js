require('dotenv').config()
const express = require('express')

const db = require('./config/db');
const { createPublisher } = require('./controllers/publisher.controller');

const app = express()
const port = 3000

app.get('/', (req, res) => {
	createPublisher()
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
	db.authenticate()
		.then(() => console.log('Connection has been established successfully.'))
		.catch(error => console.error('Unable to connect to the database:', error))
})