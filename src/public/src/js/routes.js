'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/dashboard.html'
            })
            .state('list', {
                url: '/list',
                templateUrl: 'templates/list.html'
            })
            .state('trash', {
                url: '/trash',
                templateUrl: 'templates/trash.html'
            });
    }
]);