export default class PhotoService {
    /*@ngInject*/

    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    getPhotosByAlbum(albumId) {
        var deferred = this.$q.defer();
        var url = "https://jsonplaceholder.typicode.com/photos" + (albumId > 0 ? '?albumId=' + albumId : '');
        this.$http.get(url).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(response.data.message);
        });

        return deferred.promise;
    }
}