var exec = require('child_process').exec;

function ImageHelper() {};

ImageHelper.prototype = (function() {
	return {
		toJSON		: function (input, callback) {
			var output = [];
			var image = {};
			var parsed = [];
			var IFS = '        ';

			for (var i = 0; i < input.length; i++) {
				parsed = input[i].split(IFS);

				image =	{
	                repo	: parsed[0],
	                tag		: parsed[1].replace(/ /g, ''),
	                imageID	: parsed[2].replace(/ /g, ''),
	                created	: parsed[3],
	                size	: parsed[4]
	            };
				output.push(image);
			}
			callback(output);
		}
	}
})();

var imageHelper = new ImageHelper();
module.exports = imageHelper;