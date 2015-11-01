/**
 *  Containers
 */

angular
    .module('RDash')
    .controller('ImagesCtrl', ['$scope', ImagesCtrl]);

function ImagesCtrl($scope) {
    $scope.images = [
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
}

/*
    $http.get("localhost/images/all")
    .success(function (response) {$scope.images = response.records;});
*/