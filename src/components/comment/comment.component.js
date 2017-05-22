import template from './comment.html';
import controller from './comment.controller';

let commentComponent = {
    restrict: 'E',
    scope: {},
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

export default commentComponent;