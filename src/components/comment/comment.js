import angular from 'angular';
import uiRouter from 'angular-ui-router';
import commentComponent from './comment.component';

let commentModule = angular.module('comment', [
    uiRouter
])

.config(($stateProvider) => {
    $stateProvider
        .state('comment', {
            url: '/comment/:postId',
            template: '<comment></comment>',
            ncyBreadcrumb: {
                label: 'Comments',
                parent: 'home'
            }
        });
})

.component('comment', commentComponent);

export default commentModule;