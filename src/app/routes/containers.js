var containersCtrl = require('../controllers/containersCtrl.js');

module.exports = [
	{
	    method: 'GET',
	    path: '/containers/all',
		config: {
	    	handler: containersCtrl.getAll
		}
	},
	{
	    method: 'GET',
	    path: '/containers/{id}',
		config: {
	    	handler: containersCtrl.getById
		}
	}
];