var Path = require('path');

module.exports = [{
	method	: 'GET',
	path	: '/public/{path*}',
	config	: {
		handler	: function (req, res){
			res.view(__dirname + '/../public/' + req.params.path);
		}
	}
}];