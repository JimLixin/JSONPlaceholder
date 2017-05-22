import { PhotoService } from '../../services/photoService';
import { AlbumService } from '../../services/albumService';

class PhotoController {
    constructor(PhotoService, AlbumService) {
        this.name = 'Photo controller';
        this.photoList = [];
        this.gridOptions = {};
        this.searchFilters = {
            albumId: 0,
            id: 0
        };
        this.albumList = [];
        this.albumService = AlbumService;
        this.photoService = PhotoService;
        this.initGrid();
        this.initAlbumList();
        this.getPhotos();
    }

    initAlbumList() {
        let _this = this;
        this.albumService.getAlbums().then(function(data) {
            _this.albumList = data;
        });
    }

    initGrid() {
        var idColumn = {
            field: "id",
            displayName: "Id",
            cellTemplate: "<div  class='ui-grid-cell-contents'>" +
                "<a href='javascript:void(0);' ui-sref='photo.detail({id:{{ COL_FIELD }}})'>{{ COL_FIELD }}</a>" +
                "</div>"
        };
        var albumIdColumn = {
            field: "albumId",
            displayName: "AlbumID"
        };
        var titleColumn = {
            field: "title",
            displayName: "Title"
        };
        var urlColumn = {
            field: 'url',
            displayName: 'URL'
        };
        var thumbNailUrl = {
            field: 'thumbnailUrl',
            displayName: 'ThumbNailURL'
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
                albumIdColumn,
                titleColumn,
                urlColumn,
                thumbNailUrl
            ]
        };
    }

    getPhotos(albumId = 0) {
        let _this = this;
        this.photoService.getPhotosByAlbum(albumId).then(function(data) {
            console.log(albumId);
            _this.gridOptions.data = data;
        });
    }
}

export default PhotoController;