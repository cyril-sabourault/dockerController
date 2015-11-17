!function() {
    /*global angular*/
    'use strict';

    /*
     *  Images
     */

    function ImagesCtrl($scope, $http) {
        $scope.images = [];
        
        $http.get("/images/all")
            .success(function(res) {
                $scope.images = res;
            })
            .error(function() {
                console.log('failure');
            });
    }

    ImagesCtrl.$inject = ['$scope', '$http'];

    angular
        .module('RDash')
        .controller('ImagesCtrl', ['$scope', '$http', ImagesCtrl]);
    
}();