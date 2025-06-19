angular.module('app', [])
    .controller('FormController', ['$scope', function ($scope) {
        $scope.user = {}; // Object to store form data

        $scope.submitForm = function () {
            alert('Form submitted successfully!');
            console.log($scope.user); // Optional debugging
        };
    }]);
