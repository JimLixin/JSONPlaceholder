import angular from 'angular';
import uiRouter from 'angular-ui-router';
import photoComponent from './photo.component';


let photoModule = angular.module('photo', [
    uiRouter
])

.config(($stateProvider) => {
    $stateProvider
        .state('photo', {
            url: '/photo',
            template: '<photo></photo>'
        });
})

.component('photo', photoComponent);

export default photoModule;