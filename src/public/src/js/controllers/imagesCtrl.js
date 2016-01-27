!function() {
    /*global angular*/
    'use strict';

    /*
     *  Images
     */

    function ImagesCtrl($scope, $http) {
        $scope.images = [];
        $scope.imagesLoading = true;

        $http.get("/images/all")
            .success(function(res) {
                $scope.images = res;
            })
            .error(function() {
                console.log('failure');
            })
            .finally(function() {
                $scope.imagesLoading = false;
            });
    }

    ImagesCtrl.$inject = ['$scope', '$http'];

    angular
        .module('RDash')
        .controller('ImagesCtrl', ['$scope', '$http', ImagesCtrl]);
    
}();