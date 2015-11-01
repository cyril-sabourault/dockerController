/**
 *  Containers
 */

angular
    .module('RDash')
    .controller('ContainersCtrl', ['$scope', ContainersCtrl]);

function ContainersCtrl($scope) {
    $scope.containers = [
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
            id: "527",
            image: "dev-api:latest",
            command: "supervisord -c supervisord.conf",
            created: "27 hours ago",
            status: "Up 27 hours",
            port: "0.0.0.0:443->8080/tcp",
            name: "dev-api"
        }
    ];
}

/*
    $http.get("localhost/containers/all")
    .success(function (response) {$scope.containers = response.records;});
*/