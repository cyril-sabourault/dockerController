var infoCtrl = require('../controllers/infoCtrl.js');

module.exports = [
	{
	    method: 'GET',
	    path: '/info/all',
		config: {
	    	handler: infoCtrl.getAll
		}
	}
];