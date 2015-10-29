console.log(__filename);

var path = require('path');
var fs 	 = require('fs');
var _ 	 = require('underscore');

module.exports = [];

fs.readdirSync(__dirname).filter(function(files) {
	return files.substring(-3) === '.js' && files !== 'index.js' && files !== 'staticRoutes.js'; 
}).forEach(function(file) {
	var mod = require(Path.join(__dirname, file));
	
	for (var i =0; i < mod.length; i++) {
		mod[i].config.cors = {
			origin		: ['*'],
			credentials	: true,
			matchOrigin	: true
		};
	}
	module.exports = module.exports.concat(mod);
});