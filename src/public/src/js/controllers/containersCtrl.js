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

                // $scope.filteredContainers = [];
                // $scope.currentPage = 1;
                // $scope.numPerPage = 2;
                // $scope.maxSize = 5;
                // $scope.totalItems = $scope.containers.length;

                // $scope.pageChanged = function(z) {
                //     console.log('pagechanged'+z);
                // };
                // $scope.selectPage = function(z) {
                //     console.log('selectPage'+z);
                // };
                // $scope.setPage = function(z) {
                //     console.log('setPage'+z);
                //     $scope.currentPage = z;
                // };

                // $scope.$watch('currentPage + numPerPage', function() {
                //     var begin = (($scope.currentPage - 1) * $scope.numPerPage);
                //     var end = begin + $scope.numPerPage;
                //     $scope.totalItems  = $scope.containers.length;

                //     $scope.filteredContainers = $scope.containers.slice(begin, end);
                // });
            });
    }

    ContainersCtrl.$inject = ['$scope', '$http'];
    
    angular
        .module('RDash')
        .controller('ContainersCtrl', ['$scope', '$http', ContainersCtrl]);

}();