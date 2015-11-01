var containersCtrl = require('../controllers/containersCtrl.js');

module.exports = [
	{
	    method: 'GET',
	    path: '/containers/all',
	    handler: containersCtrl.getAll
	},
	{
	    method: 'GET',
	    path: '/containers/{id}',
	    handler: containersCtrl.getById
	}
];