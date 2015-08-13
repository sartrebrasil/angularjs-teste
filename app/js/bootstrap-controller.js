/*consultando o module já criado "helloWorldApp"*/

/**
 *
 */
(function () {

    angular.module('helloWorldApp').controller('BoostrapController', BoostrapController);

    BoostrapController.$inject = ['$scope', '$growl']
    function BoostrapController($scope, $growl) {

        $scope.pessoa = {};
        $scope.pessoas = [];

        $scope.salvar = function () {
            if ($scope.myForm.$invalid) {

                /*
                 var params = {};
                 params.class = 'success';
                 params.timeout = '4000';
                 */
                $growl.box('Erro', 'FKY', {'class': 'warning'}).open();

                //alert('Fuck you man! Error!')
                return;
            }
            $scope.pessoas.push($scope.pessoa);
        };

        $scope.excluir = function (index) {
            $scope.pessoas.splice(index, 1);
        };

        $scope.limpar = function () {
            $scope.pessoa = {};
            $scope.myForm.$pristine = true;
        };

        $scope.editar = function (pessoa) {
            $scope.pessoa = pessoa;
        };
    }
})();