angular.module('app', [])
    .controller('GuessTheNumberController', GuessTheNumberController);

function GuessTheNumberController($scope) {
    $scope.initializeGame = function () {
        $scope.noOfTries = 0;
        $scope.original = Math.floor((Math.random() * 1000) + 1);
        $scope.guess = null;
        $scope.deviation = null;
    };

    $scope.verifyGuess = function () {
        if ($scope.guess !== null && $scope.guess !== undefined) {
            $scope.deviation = $scope.original - $scope.guess;
            $scope.noOfTries++;
        }
    };

    $scope.initializeGame();
}