angular.module('bootstrapApp')

.directive('jbHelloWorld', function() {
    return {
        restrict: 'E',
        template: '<h1>Olá mundo.... essa e a 1 Directive</h1>'
    };
});