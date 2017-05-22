import template from './todo.html';
import controller from './todo.controller';

let todoComponent = {
    restrict: 'E',
    scope: {},
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

export default todoComponent;