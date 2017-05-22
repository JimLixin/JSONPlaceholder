import angular from 'angular';
import Home from './home/home';
import New from './new/new';
import Post from './post/post';
import PostDetail from './post-detail/post-detail';
import Comment from './comment/comment';
import CommentDetail from './comment-detail/comment-detail';
import User from './user/user';
import UserDetail from './user-detail/user-detail';
import Todo from './todo/todo';
import Album from './album/album';
import Photo from './photo/photo';

export default angular.module('app.components', [

    Home.name,
    New.name,
    Post.name,
    PostDetail.name,
    Comment.name,
    CommentDetail.name,
    User.name,
    UserDetail.name,
    Todo.name,
    Album.name,
    Photo.name
]);