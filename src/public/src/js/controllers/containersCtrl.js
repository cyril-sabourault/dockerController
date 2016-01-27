!function() {
    /*global angular*/
    'use strict';
    
    /*
     *  Containers
     */
    
    function ContainersCtrl($scope, $http) {
        $scope.containers = [];
        $scope.containersLoading = true;

        $http.get("/containers/all")
            .success(function(res) {
                $scope.containers = res;
            })
            .error(function() {
                console.log('failure');
            })
            .finally(function() {
                $scope.containersLoading = false;
            });
    }

    ContainersCtrl.$inject = ['$scope', '$http'];
    
    angular
        .module('RDash')
        .controller('ContainersCtrl', ['$scope', '$http', ContainersCtrl]);

}();