import template from './photo.html';
import controller from './photo.controller';

let photoComponent = {
    restrict: 'E',
    scope: {},
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

export default photoComponent;