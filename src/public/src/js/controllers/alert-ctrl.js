/**
 * Alerts Controller
 */

angular
    .module('RDash')
    .controller('alertsCtrl', ['$scope', alertsCtrl]);

function alertsCtrl($scope) {
    $scope.alerts = [{
        type: 'success',
        msg: 'type: success'
    }, {
        type: 'danger',
        msg: 'type: danger'
    }];

    $scope.addAlert = function(type, msg) {
        $scope.alerts.push({
            type: type,
            msg: msg
        });
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
}