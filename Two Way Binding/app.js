angular.module('app', [])
    .controller('FormController', ['$scope', function ($scope) {
        $scope.user = {
            name: "",
            email: "",
            message: ""
        }; // Initialize user object to prevent undefined values

        $scope.submitForm = function () {
            alert('Form submitted successfully!');
        };
    }]);