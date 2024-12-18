'use strict';

// Declare app level module which depends on views, and core components
angular.module('todoApp', [])
    .controller('TodoController', function($scope) {
      $scope.tasks = [];

      // Add a new task
      $scope.addTask = function() {
        if ($scope.newTask) {
          const task = {
            text: $scope.newTask,
            dateAdded: new Date().toLocaleString(),
            number: $scope.tasks.length + 1  // Set the task number
          };
          $scope.tasks.push(task);
          $scope.newTask = '';  // Clear the input field
        }
      };

      // Remove a task
      $scope.removeTask = function(index) {
        $scope.tasks.splice(index, 1);
        // Update task numbers after removal
        $scope.tasks.forEach((task, i) => task.number = i + 1);
      };
    });