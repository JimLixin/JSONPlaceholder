import { CommentService } from '../../services/commentService'
import { PostService } from '../../services/postService'


class CommentController {
    constructor(CommentService, PostService, $stateParams) {
        this.name = 'Comment controller';
        this.commentList = [];
        this.postList = [];
        this.commentService = CommentService;
        this.postService = PostService;
        this.selectedPost = { id: $stateParams.postId, title: '' };
        this.initGrid();
        this.initPostList();
        this.getComments(this.selectedPost.id);
    }

    getComments(postId) {
        console.log('Post ID is:' + this.selectedPost.id);
        let _this = this;
        this.commentService.getComments(postId).then(function(data) {
            _this.gridOptions.data = data;
        });
    }

    initPostList() {
        let _this = this;
        this.postService.getPosts().then(function(data) {
            _this.postList = data;
        });
    }

    initGrid() {
        var idColumn = {
            field: "id",
            displayName: "Id",
            cellTemplate: "<div  class='ui-grid-cell-contents'>" +
                "<a href='javascript:void(0);' ui-sref='comment.detail({id:{{ COL_FIELD }}})'>{{ COL_FIELD }}</a>" +
                "</div>"
        };
        var postIdColumn = {
            field: "postId",
            displayName: "PostID"
        };
        var nameColumn = {
            field: "name",
            displayName: "Name"
        };
        var emailColumn = {
            field: "email",
            displayName: "Email"
        };
        var bodyColumn = {
            field: "body",
            displayName: "Body"
        };

        this.gridOptions = {
            paginationPageSizes: [20, 50, 75],
            paginationPageSize: 20,
            minRowsToShow: 20,
            cellClass: 'overflow-visible',
            exporterMenuPdf: false,
            enableFiltering: true,
            enableCellEdit: false,
            enablePaginationControls: true,
            columnDefs: [
                idColumn,
                postIdColumn,
                nameColumn,
                emailColumn,
                bodyColumn
            ]
        };
    }
}

export default CommentController;