var imagesCtrl = require('../controllers/imagesCtrl.js');

module.exports = [
	{
	    method: 'GET',
	    path: '/images/all',
		config: {
	    	handler: imagesCtrl.getAll
		}
	},
	{
	    method: 'GET',
	    path: '/images/{id}',
		config: {
	    	handler: imagesCtrl.getById
		}
	}
];