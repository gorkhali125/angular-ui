const express = require('express');
const routes = express.Router();
const bcrypt = require('bcrypt');

const { User } = require('../sequelize');

routes.get('/', (req, res) => {
	res.status(200).json({ message: 'Connected!' });
});

routes.post('/login', (req, res) => {

});

routes.post('/checkunique', (req, res) => {
	User.findOne({
		where: {
			[req.body.field]: req.body.data
		},
	}).then(function(user){
		res.status(200).json({found: user ? true : false});
	});
});

routes.post('/register', (req, res) => {
	return bcrypt.hash(req.body.password, 10).then(function(hash) {
		return User.create({
			username: req.body.userName,
			password: hash,
			email: req.body.email,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			phoneNumber: req.body.phoneNumber,
		}).then(function(user) {
			if (user) {
				res.status(200).json({ message: 'Registration successfull.' });
			} else {
				res.status(409).json({ message: 'Error in inserting new record.' });
			}
		});
	});	
});

module.exports = routes;
