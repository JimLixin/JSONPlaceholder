import template from './user.html';
import controller from './user.controller';

let userComponent = {
    restrict: 'E',
    scope: {},
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

export default userComponent;