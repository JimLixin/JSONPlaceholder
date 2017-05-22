import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiRouterModal from 'angular-ui-router-uib-modal';
import uiBootstrap from 'angular-ui-bootstrap';
import uiGrid from 'angular-ui-grid';
import 'angular-ui-grid/ui-grid.css';
import angularBreadCrumb from 'angular-breadcrumb';
import AppCtrl from './app.controller.js';
import AppComponent from './app.component.js';
import Components from '../components/components';
import Common from '../common/common';
import DataService from '../services/mockService';
import PostService from '../services/postService';
import CommentService from '../services/commentService';
import UserService from '../services/userService';
import TodoService from '../services/todoService';
import AlbumService from '../services/albumService';
import PhotoService from '../services/photoService';
import '../style/app.css';


const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
        'ui.router', // uiRouter,
        'ui.router.modal',
        'ui.bootstrap', //uiBootstrap,
        'ui.grid',
        'ui.grid.edit',
        'ui.grid.pagination',
        'ui.grid.expandable',
        'ui.grid.resizeColumns',
        'ui.grid.exporter',
        'ncy-angular-breadcrumb',
        Components.name,
        Common.name
    ])
    .directive('app', AppComponent)
    .service('DataService', DataService)
    .service('PostService', PostService)
    .service('CommentService', CommentService)
    .service('UserService', UserService)
    .service('TodoService', TodoService)
    .service('AlbumService', AlbumService)
    .service('PhotoService', PhotoService)
    .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;