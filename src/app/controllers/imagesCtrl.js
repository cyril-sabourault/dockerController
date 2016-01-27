var docker = require('../helpers/docker');
var image = require('../helpers/imageHelper');

function ImagesCtrl(){};

ImagesCtrl.prototype = (function() {
	return {
		getAll: function (req, res) {
			// var images = [
	        //     {
	        //         repo: "pre-front",
	        //         tag: "latest",
	        //         imageID: "ef8",
	        //         created: "27 hours ago",
	        //         size: "521.3 MB"
	        //     },
	        //     {
	        //         repo: "pre-api",
	        //         tag: "latest",
	        //         imageID: "d7c",
	        //         created: "27 hours ago",
	        //         size: "542.2 MB"
	        //     }
        	// ];
			// return res(images);

			docker.images(null, function(images) {
				if (!images)
					return [];

				image.toJSON(images, function(images) {
					if (!images)
						return [];
					return res(images);
					// setTimeout(function() { return res(images); }, 1000);
				});
			});
		},
		getById: function (req, res){
			console.log('images/getById');
			var image = [];
			return res(image);
		}
	};
})();

var imagesCtrl = new ImagesCtrl();
module.exports = imagesCtrl;