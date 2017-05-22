import DataService from './mockService';
import PostService from './postService';
import CommentService from './commentService';
import UserService from './userService';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME)
    .service('DataService', DataService)
    .service('PostService', PostService)
    .service('CommentService', CommentService)
    .service('UserService', UserService);