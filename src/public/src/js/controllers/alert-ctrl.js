/**
 * Alerts Controller
 */

function AlertsCtrl($scope) {
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

angular
    .module('RDash')
    .controller('AlertsCtrl', ['$scope', AlertsCtrl]);