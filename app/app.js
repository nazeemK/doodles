'use strict';

// Declare app level module which depends on views, and core components
const app = angular.module('todoApp', []);

app.controller('TodoController', function ($scope) {
  $scope.tasks = [];

  $scope.addTask = function () {
    if ($scope.newTask) {
      const currentDate = new Date(); // Get current date
      $scope.tasks.push({
        text: $scope.newTask,
        dateAdded: currentDate.toLocaleString() // Format date
      });
      $scope.newTask = ''; // Clear input
    }
  };

  $scope.removeTask = function (index) {
    $scope.tasks.splice(index, 1);
  };
});
