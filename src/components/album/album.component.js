import template from './album.html';
import controller from './album.controller';

let albumComponent = {
    restrict: 'E',
    scope: {},
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

export default albumComponent;