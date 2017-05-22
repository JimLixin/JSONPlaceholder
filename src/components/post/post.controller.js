import { PostService } from '../../services/postService';
import { UserService } from '../../services/userService';

class PostController {
    constructor(PostService, UserService, $stateParams) {
        this.name = 'Post controller';
        this.postList = [];
        this.gridOptions = {};
        this.selectedUser = { id: $stateParams.userId };
        this.userList = [];
        this.postService = PostService;
        this.userService = UserService;
        this.initGrid();
        this.initUserList();
        this.getPosts($stateParams.userId);
    }

    initUserList() {
        let _this = this;
        this.userService.getUsers().then(function(data) {
            _this.userList = data;
        });
    }

    initGrid() {
        var idColumn = {
            field: "id",
            displayName: "Id",
            cellTemplate: "<div  class='ui-grid-cell-contents'>" +
                "<a href='javascript:void(0);' ui-sref='post.detail({id:{{ COL_FIELD }}})'>{{ COL_FIELD }}</a>" +
                "</div>"
        };
        var userIdColumn = {
            field: "userId",
            displayName: "UserID",
            cellTemplate: "<div  class='ui-grid-cell-contents'>" +
                "<a href='javascript:void(0);' ui-sref='user.detail({id: {{COL_FIELD}}})'>{{ COL_FIELD }}</a>" +
                "</div>"
        };
        var titleColumn = {
            field: "title",
            displayName: "Title"
        };
        var viewCommentsColumn = {
            field: 'id',
            displayName: 'Comments',
            cellTemplate: "<div  class='ui-grid-cell-contents'>" +
                "<a href='javascript:void(0);' ui-sref='comment({postId: row.entity.id})'>View Comments</a>" +
                "</div>"
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
                userIdColumn,
                titleColumn,
                viewCommentsColumn
            ]
        };
    }

    getPosts(userId = 0) {
        let _this = this;
        this.postService.getPosts(userId).then(function(data) {
            //console.log(data);
            _this.gridOptions.data = data;
        });
    }
}

export default PostController;