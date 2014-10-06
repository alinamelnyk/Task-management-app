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
    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.todos, function(todo){
            count+= todo.done ? 0 : 1;
        });
        localStorage.setItem('todos', JSON.stringify($scope.todos));
        return count;
    };
}]);
