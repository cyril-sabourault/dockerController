var exec = require('child_process').exec;

function ContainerHelper() {};

ContainerHelper.prototype = (function() {
	return {
		toJSON		: function (input, callback) {
			var output = [];
			var container = {};
			var parsed = [];
			
			var IFS = '        ';
			var re = /\W+"(.*)"\W+(.*)$/;
			var match;

			for (var i = 0; i < input.length; i++) {
				parsed = input[i].split(IFS);

				if ((match = re.exec(parsed[2])) !== null) {
					if (match.index === re.lastIndex) {
					re.lastIndex++;
					}
				}

				container = {
		            id		: parsed[0],
		            image	: parsed[1],
		            command	: match[1],
		            created	: match[2],
		            status	: parsed[3],
		            port	: parsed[4],
		            name	: parsed[5].replace(/ /g, '')
		        };
				
				output.push(container);
			}
			
			callback(output);
		}
	}
})();

var containerHelper = new ContainerHelper();
module.exports = containerHelper;