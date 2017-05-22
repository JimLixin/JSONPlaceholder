import { UserService } from '../../services/userService'

class UserController {
    constructor(UserService) {
        this.name = 'User controller';
        this.userList = [];
        this.userService = UserService;
        this.initGrid();
        this.getUsers();
    }

    getUsers() {
        let _this = this;
        this.userService.getUsers().then(function(data) {
            _this.gridOptions.data = data;
        });
    }

    initGrid() {
        var idColumn = {
            field: "id",
            displayName: "Id",
            cellTemplate: "<div  class='ui-grid-cell-contents'>" +
                "<a href='javascript:void(0);' ui-sref='user.detail({id:{{ COL_FIELD }}})'>{{ COL_FIELD }}</a>" +
                "</div>"
        };
        var nameColumn = {
            field: "name",
            displayName: "Name"
        };
        var userNameColumn = {
            field: "username",
            displayName: "User Name"
        };
        var emailColumn = {
            field: "email",
            displayName: "Email"
        };
        var phoneColumn = {
            field: 'phone',
            displayName: 'Phone'
        };
        var viewPostsColumn = {
            field: 'id',
            displayName: 'Posts',
            cellTemplate: "<div  class='ui-grid-cell-contents'>" +
                "<a href='javascript:void(0);' ui-sref='post({userId: row.entity.id})'>View Posts</a>" +
                "</div>"
        };
        var viewTodosColumn = {
            field: 'id',
            displayName: 'Todo List',
            cellTemplate: "<div  class='ui-grid-cell-contents'>" +
                "<a href='javascript:void(0);' ui-sref='todo({userId: row.entity.id})'>View Todo List</a>" +
                "</div>"
        };
        var viewAlbumsColumn = {
            field: 'id',
            displayName: 'Albums',
            cellTemplate: "<div  class='ui-grid-cell-contents'>" +
                "<a href='javascript:void(0);' ui-sref='album({userId: row.entity.id})'>View Albums</a>" +
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
                nameColumn,
                userNameColumn,
                emailColumn,
                phoneColumn,
                viewPostsColumn,
                viewTodosColumn,
                viewAlbumsColumn
            ]
        };
    }
}

export default UserController;