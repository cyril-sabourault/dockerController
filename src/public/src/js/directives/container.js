/**
 * Container Directive
 */

angular
    .module('RDash')
    .directive('rdContainer', rdContainer);

function rdContainer() {
    var directive = {
        restrict: 'AE',
        template: '<td class="text-center">{{ container.id }}</td><td>{{ container.image }}</td><td>{{ container.command }}</td><td>{{ container.status }}</td><td>{{ container.port }}</td><td>{{ container.name }}</td>'
    };
    return directive;
};