var todoApp = angular.module('todoApp', ['xeditable','LocalStorageModule']);
todoApp.controller('TodoController', ['$scope', 'localStorageService', function($scope, localStorageService) {
    $scope.appTitle = "Simple task management app";
    $scope.saved = localStorageService.get('todos');
    $scope.todos = (localStorageService.get('todos')!==null) ? fromJson($scope.saved) : [
        {name: 'Task1', description: 'Description for task1', done: false},
        {name: 'Task2', description: 'Description for task2', done: false}
    ];

    $scope.addTodo = function() {
        $scope.todos.push({
            name: $scope.todoName,
            description: $scope.todoDescription,
            date: new Date(),
            done: false
        });
        $scope.todoName = '';
        $scope.todoDescription = ''; //clear the input after adding
        localStorageService.set('todos', toJson($scope.todos));
    };

    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.todos, function(todo){
            count+= todo.done ? 0 : 1;
        });
        localStorageService.set('todos', toJson($scope.todos));
        return count;
    };

    $scope.archive = function() {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function(todo){
            if (!todo.done)
                $scope.todos.push(todo);
        });
        localStorageService.set('todos', toJson($scope.todos));
    };

    $scope.removeTodo = function(todo) {
        $scope.todos.splice(
            $scope.todos.indexOf(todo),
            1
        );
    };
}]);
todoApp.run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
todoApp.controller('Ctrl', function($scope) {
    $scope.user = {
        name: $scope.todoName,
        description: $scope.todoDescription
    };
});
