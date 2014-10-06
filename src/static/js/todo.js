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
        return count;
    };
    $scope.archive = function() {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function(todo){
            if (!todo.done)
                $scope.todos.push(todo);
        });
    };
    $scope.removeTodo = function(todo) {
        $scope.todos.splice(
            $scope.todos.indexOf(todo),
            1
        );
    };
}]);
