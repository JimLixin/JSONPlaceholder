import { AlbumService } from '../../services/albumService';
import { UserService } from '../../services/userService';

class AlbumController {
    constructor(AlbumService, UserService, $stateParams) {
        this.name = 'Album controller';
        this.albumList = [];
        this.gridOptions = {};
        this.selectedUser = { id: $stateParams.userId };
        this.userList = [];
        this.albumService = AlbumService;
        this.userService = UserService;
        this.initGrid();
        this.initUserList();
        this.getAlbums($stateParams.userId);
    }

    initUserList() {
        let _this = this
        this.userService.getUsers().then(function(data) {
            _this.userList = data;
        });
    }

    initGrid() {
        var idColumn = {
            field: "id",
            displayName: "Id",
            cellTemplate: "<div  class='ui-grid-cell-contents'>" +
                "<a href='javascript:void(0);' ui-sref='album.detail({id:{{ COL_FIELD }}})'>{{ COL_FIELD }}</a>" +
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
                titleColumn
            ]
        };
    }

    getAlbums(userId = 0) {
        let _this = this;
        this.albumService.getAlbumsByUser(userId).then(function(data) {
            //console.log(data);
            _this.gridOptions.data = data;
        });
    }
}

export default AlbumController;