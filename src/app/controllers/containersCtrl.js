function containersCtrl(){};

containersCtrl.prototype = (function() {
	return {
		getAll: function (req, res) {},
		getById: function (req, res){}
	};
})();

var containersCtrl = new containersCtrl();
module.exports = containersCtrl;