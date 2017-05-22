import angular from 'angular';
import uiRouter from 'angular-ui-router';
import todoComponent from './todo.component';


let todoModule = angular.module('todo', [
    uiRouter
])

.config(($stateProvider) => {
    $stateProvider
        .state('todo', {
            url: '/todo/:userId',
            template: '<todo></todo>'
        });
})

.component('todo', todoComponent);

export default todoModule;