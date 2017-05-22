import template from './post.html';
import controller from './post.controller';

let postComponent = {
    restrict: 'E',
    scope: {},
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

export default postComponent;