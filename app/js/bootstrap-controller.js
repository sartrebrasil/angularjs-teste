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

        $scope.gridOptions = {
            data : 'pessoas',
            columnDefs: [
                { name: 'Nome', field: 'nome', cellTemplate: 'app/components/column-template.html' },
                { name: 'Sobrenome', field: 'sobrenome' },
                { name: 'Nascimento', field: 'nascimento' },
                { name: 'Sexo', field: 'sexo' },
                { name: 'Actions', cellTemplate: 'app/components/column-buttons.html'}
            ],
            rowTemplate: 'app/components/row-template.html'
        };

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

        /**
         *
         * @param index
         */
        $scope.excluir = function (index) {
            $scope.pessoas.splice(index, 1);
            alert('excluir');
        };

        $scope.limpar = function () {
            $scope.pessoa = {};
            $scope.myForm.$pristine = true;
        };

        /**
         *
         * @param pessoa
         */
        $scope.editar = function (pessoa) {
            $scope.pessoa = pessoa;
        };

        /**
         *
         * @param row
         * @param col
         * @param colIndex
         */
        $scope.gridItemClick = function (row, col, colIndex) {
            console.log(row);
            alert('Fuck you!');
        };

        /**
         *
         * @param row
         * @returns {{}}
         */
        $scope.getRowStyle = function (row) {
            var rowStyle = {};
            if (angular.isDefined(row.entity.cor)) {
                rowStyle.backgroundColor = row.entity.cor;
            }
            return rowStyle;
        };

    }
})();