import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [uiRouter])
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                template: '<home></home>',
                ncyBreadcrumb: {
                    label: 'Home page'
                }
            });
    })
    .component('home', homeComponent);

export default homeModule;