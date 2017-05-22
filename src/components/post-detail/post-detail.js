import angular from 'angular';
import uiRouter from 'angular-ui-router';
import postDetailComponent from './post-detail.component';

let postDetailModule = angular.module('post-detail', [
    uiRouter
])

.config(($stateProvider) => {
    $stateProvider
        .state('post.detail', {
            url: '/:id',
            modal: true,
            size: 'lg',
            template: '<post-detail></post-detail>'
        });
})

.component('postDetail', postDetailComponent);

export default postDetailModule;