require('dotenv').config()
const express = require('express')
const redis = require("redis");

const db = require('./config/db');
const routes = require('./routes');

const app = express()
const port = 3000
app.set('view engine', 'ejs');
const redisPort = 6379
const client = redis.createClient(redisPort);

client.on("error", (err) => {
	console.log(err);
});

app.use('/', routes)

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
	db.authenticate()
		.then(() => console.log('Connection has been established successfully.'))
		.catch(error => console.error('Unable to connect to the database:', error))
})