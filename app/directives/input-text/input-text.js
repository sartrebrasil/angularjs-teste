angular.module('bootstrapApp')
    .directive('inputText', inputText);

inputText.$inject = ['$rootScope'];

function inputText($rootScope) {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/input-text/input-text.html',
        scope: {
            ngModel: '=', //valor de fora para dentro e dentro para o model
            ngDisabled: '=?',
            ngRequired: '=?',
            label: '@', //valor de fora para dentro
            colspan: '@'
        },
        link: function($scope, element, attrs){
            $scope.classInputText = 'col-sm-3';

            if (angular.isDefined($scope.colspan)) {
                $scope.classInputText = 'col-sm-' + $scope.colspan;
            }

        }
    };
}