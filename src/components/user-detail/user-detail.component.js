import template from './user-detail.html';
import controller from './user-detail.controller';

let userDetailComponent = {
    restrict: 'E',
    scope: {},
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

export default userDetailComponent;