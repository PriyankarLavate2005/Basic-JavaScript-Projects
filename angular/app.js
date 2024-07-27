var app = angular.module('registrationApp', []);

app.controller('registrationController', function($scope) {
$scope.student = {};

$scope.submitForm = function() {
// You can perform further validation or send the data to the server here
console.log('Student data submitted:', $scope.student);
};
});