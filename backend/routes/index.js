const express = require('express');
const routes = express.Router();

const { User } = require('../sequelize');

routes.get('/', (req, res) => {
	res.status(200).json({ message: 'Connected!' });
});

routes.post('/login', (req, res) => {

});

routes.post('/register', (req, res) => {

});

module.exports = routes;
