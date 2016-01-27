var docker = require('../helpers/docker');
var info = require('../helpers/infoHelper');

function InfoCtrl(){};

InfoCtrl.prototype = (function() {
	return {
		getAll: function (req, res) {
			docker.info(null, function(infos) {
				if (!info)
					return [];
				info.toJSON(infos, function(infos) {
					if (!infos)
						return [];
					return res(infos);
				});
			});
		}
	};
})();

var infoCtrl = new InfoCtrl();
module.exports = infoCtrl;