var path = require('path');
var fs 	 = require('fs');
var _ 	 = require('underscore');


module.exports = [];

fs.readdirSync(__dirname).filter(function(files) {
	return files !== 'index.js' && files !== 'staticRoutes.js';
}).forEach(function(file) {
	var mod = require(path.join(__dirname, file));
	
	for (var i =0; i < mod.length; i++) {
		mod[i].config.cors = {
			origin		: ['*']
		};
	}
	
	module.exports = module.exports.concat(mod);
});