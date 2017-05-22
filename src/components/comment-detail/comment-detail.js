import angular from 'angular';
import uiRouter from 'angular-ui-router';
import commentDetailComponent from './comment-detail.component';

let commentDetailModule = angular.module('comment-detail', [
    uiRouter
])

.config(($stateProvider) => {
    $stateProvider
        .state('comment.detail', {
            url: '/:id',
            modal: true,
            size: 'lg',
            template: '<comment-detail></comment-detail>'
        });
})

.component('commentDetail', commentDetailComponent);

export default commentDetailModule;