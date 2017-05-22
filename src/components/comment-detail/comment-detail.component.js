import template from './comment-detail.html';
import controller from './comment-detail.controller';

let commentDetailComponent = {
    restrict: 'E',
    scope: {},
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

export default commentDetailComponent;