import angular from 'angular';
import uiRouter from 'angular-ui-router';
import postComponent from './post.component';


let postModule = angular.module('post', [
    uiRouter
])

.config(($stateProvider) => {
    $stateProvider
        .state('post', {
            url: '/post/:userId',
            template: '<post></post>',
            ncyBreadcrumb: {
                label: 'Posts',
                parent: 'home'
            }
        });
})

.component('post', postComponent);

export default postModule;