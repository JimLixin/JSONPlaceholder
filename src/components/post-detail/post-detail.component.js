import template from './post-detail.html';
import controller from './post-detail.controller';

let postDetailComponent = {
    restrict: 'E',
    scope: {},
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

export default postDetailComponent;