var imagesCtrl = require('../controllers/imagesCtrl.js');

module.exports = [
	{
	    method: 'GET',
	    path: '/images/all',
	    handler: imagesCtrl.getAll
	},
	{
	    method: 'GET',
	    path: '/images/{id}',
	    handler: imagesCtrl.getById
	}
];