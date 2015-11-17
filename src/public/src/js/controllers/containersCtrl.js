!function() {
    /*global angular*/
    'use strict';
    
    /*
     *  Containers
     */
    
    function ContainersCtrl($scope, $http) {
        $scope.containers = [];
        
        $http.get("/containers/all")
            .success(function(res) {
                $scope.containers = res;
            })
            .error(function() {
                console.log('failure');
            });
    }

    ContainersCtrl.$inject = ['$scope', '$http'];
    
    angular
        .module('RDash')
        .controller('ContainersCtrl', ['$scope', '$http', ContainersCtrl]);

}();