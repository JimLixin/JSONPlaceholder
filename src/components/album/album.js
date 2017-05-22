import angular from 'angular';
import uiRouter from 'angular-ui-router';
import albumComponent from './album.component';


let albumModule = angular.module('album', [
    uiRouter
])

.config(($stateProvider) => {
    $stateProvider
        .state('album', {
            url: '/album/:userId',
            template: '<album></album>'
        });
})

.component('album', albumComponent);

export default albumModule;