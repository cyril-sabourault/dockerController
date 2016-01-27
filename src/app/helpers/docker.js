var exec = require('child_process').exec;

function DockerHelper() {};

DockerHelper.prototype = (function() {
	return {
		ps		: function (err, callback) {
			var output;
			var res;

			exec('docker ps -a', function (err, stdout, stderr) {
				if (err) {
					return 0;
				}
				output = stdout.split('\n');
				output.shift(); output.pop();
				
				res = output?output:0;
				callback(res);
			});
		},
		images	: function(err, callback) {
			var output;
			var res;

			exec('docker images', function (err, stdout, stderr) {
				if (err) {
					return 0;
				}
				output = stdout.split('\n');
				output.shift(); output.pop();
				
				res = output?output:0;
				callback(res);
			});
		},
		info	: function(err, callback) {
			var	output;

			exec('docker info', function (err, stdout, stderr) {
				if (err) {
					return 0;
				}

				output = stdout.split('\n');
				output.pop();
				
				callback(output);
			});
		}
	}
})();

var dockerHelper = new DockerHelper();
module.exports = dockerHelper;