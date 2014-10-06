var todoApp = angular.module('todoApp', []);
todoApp.controller('TodoController', ['$scope', function($scope) {
    $scope.appTitle = "Simple task management app";
    $scope.todos = [
        {name: 'Task1', description: 'Description for task1', done: false},
        {name: 'Task2', description: 'Description for task2', done: false}
    ];
    $scope.addTodo = function() {
        $scope.todos.push({
            name: $scope.todoName,
            description: $scope.todoDescription,
            done: false
        });
        $scope.todoName = '';
        $scope.todoDescription = ''; //clear the input after adding
    };
}]);
