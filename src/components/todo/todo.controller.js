import { TodoService } from '../../services/todoService';
import { UserService } from '../../services/userService';

class TodoController {
    constructor(TodoService, UserService, $stateParams) {
        this.name = 'Todo controller';
        this.todoList = [];
        this.gridOptions = {};
        this.selectedUser = { id: $stateParams.userId };
        this.userList = [];
        this.todoService = TodoService;
        this.userService = UserService;
        this.initGrid();
        this.initUserList();
        this.getTodos($stateParams.userId);
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
                "<a href='javascript:void(0);' ui-sref='todo.detail({id:{{ COL_FIELD }}})'>{{ COL_FIELD }}</a>" +
                "</div>"
        };
        var userIdColumn = {
            field: "userId",
            displayName: "UserID"
        };
        var titleColumn = {
            field: "title",
            displayName: "Title"
        };
        var completedColumn = {
            field: "completed",
            displayName: "Completed"
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
                completedColumn
            ]
        };
    }

    getTodos(userId = 0) {
        let _this = this;
        this.todoService.getTodosByUser(userId).then(function(data) {
            //console.log(data);
            _this.gridOptions.data = data;
        });
    }
}

export default TodoController;