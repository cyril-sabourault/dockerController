function containersCtrl(){};

containersCtrl.prototype = (function() {
	return {
		getAll: function (req, res) {
			console.log('Containers/getAll');
			var containers = [
		        {
		            id: "azertyuiolp",
		            image: "dev-front:latest",
		            command: "npm start",
		            created: "27 hours ago",
		            status: "Up 27 hours",
		            port: "0.0.0.0:80->8080/tcp",
		            name: "dev-front"
		        },
		        {
		            id: "51b",
		            image: "dev-front:latest",
		            command: "npm start",
		            created: "27 hours ago",
		            status: "Up 27 hours",
		            port: "0.0.0.0:80->8080/tcp",
		            name: "dev-front"
		        },
		        {
		            id: "51b",
		            image: "dev-front:latest",
		            command: "npm start",
		            created: "27 hours ago",
		            status: "Up 27 hours",
		            port: "0.0.0.0:80->8080/tcp",
		            name: "dev-front"
		        },
		        {
		            id: "51b",
		            image: "dev-front:latest",
		            command: "npm start",
		            created: "27 hours ago",
		            status: "Up 27 hours",
		            port: "0.0.0.0:80->8080/tcp",
		            name: "dev-front"
		        },
		        {
		            id: "pivfb",
		            image: "dev-api:latest",
		            command: "supervisord -c supervisord.conf",
		            created: "27 hours ago",
		            status: "Up 27 hours",
		            port: "0.0.0.0:443->8080/tcp",
		            name: "dev-api"
		        }
			];
			return res(containers);
		},
		getById: function (req, res){
			console.log('containers/getById');
			var container = [
				
			];
			return res(container);
		}
	};
})();

var containersCtrl = new containersCtrl();
module.exports = containersCtrl;