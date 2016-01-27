var exec = require('child_process').exec;

function InfoHelper() {};

InfoHelper.prototype = (function() {
	return {
		toJSON		: function (input, callback) {
			var info = {};
			var parsed = [];
			var IFS = ': ';

			/*
				//  docker info
				[ 'Containers: 1',
				'Images: 13',
				'Server Version: 1.9.1',
				'Storage Driver: aufs',
				' Root Dir: /var/lib/docker/aufs',
				' Backing Filesystem: extfs',
				' Dirs: 15',
				' Dirperm1 Supported: true',
				'Execution Driver: native-0.2',
				'Logging Driver: json-file',
				'Kernel Version: 3.16.0-4-amd64',
				'Operating System: Debian GNU/Linux 8 (jessie)',
				'CPUs: 4',
				'Total Memory: 7.738 GiB',
				'Name: cyril-pro',
				'ID: NR63:2VOF:M3CP:3QFL:JOHG:OHNR:KP6S:LQS6:XFU6:UOPP:YR6D:4CYS' ]
			*/
			for (var i = 0; i < input.length; i++) {
				parsed = input[i].split(IFS);

				info[parsed[0]] = parsed[1];
			}
			callback(info);
		}
	}
})();

var infoHelper = new InfoHelper();
module.exports = infoHelper;