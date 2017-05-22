export default class AlbumService {
    /*@ngInject*/

    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    getAlbums() {
        var deferred = this.$q.defer();
        this.$http.get("https://jsonplaceholder.typicode.com/albums").then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(response.data.message);
        });

        return deferred.promise;
    }

    getAlbumsByUser(userId) {
        var deferred = this.$q.defer();
        var url = "https://jsonplaceholder.typicode.com/albums" + (userId > 0 ? '?userId=' + userId : '');
        this.$http.get(url).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(response.data.message);
        });

        return deferred.promise;
    }
}