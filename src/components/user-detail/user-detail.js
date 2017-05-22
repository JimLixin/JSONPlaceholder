import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userDetailComponent from './user-detail.component';

let userDetailModule = angular.module('user-detail', [
    uiRouter
])

.config(($stateProvider) => {
    $stateProvider
        .state('user.detail', {
            url: '/:from/:id',
            modal: true,
            size: 'lg',
            template: '<user-detail></user-detail>'
        });
})

.component('userDetail', userDetailComponent);

export default userDetailModule;