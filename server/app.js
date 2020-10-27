const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = 3000
const config = require('./app.config.js');

mongoose.connect(config.db.devUrl, { useNewUrlParser: true })
mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
mongoose.connection.once('open', function() { console.log('Mongodb Connection Success')})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', require('./routes'))

let server = app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
module.exports = server