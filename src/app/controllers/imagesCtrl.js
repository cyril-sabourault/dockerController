function imagesCtrl(){};

imagesCtrl.prototype = (function() {
	return {
		getAll: function (req, res) {
			console.log('images/getAll');
			var images = [
	            {
	                repo: "pre-front",
	                tag: "latest",
	                imageID: "ef8",
	                created: "27 hours ago",
	                size: "521.3 MB"
	            },
	            {
	                repo: "pre-api",
	                tag: "latest",
	                imageID: "d7c",
	                created: "27 hours ago",
	                size: "542.2 MB"
	            }
        	];
			return res(images);
		},
		getById: function (req, res){
			console.log('images/getById');
			var image = [
				
			];
			return res(image);
		}
	};
})();

var imagesCtrl = new imagesCtrl();
module.exports = imagesCtrl;