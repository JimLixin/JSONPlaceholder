export default class PostService {
    /*@ngInject*/

    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    getPosts(userId) {
        var deferred = this.$q.defer();
        var url = "https://jsonplaceholder.typicode.com/posts" + (userId > 0 ? '?userId=' + userId.toString() : '');
        console.log(url);
        this.$http.get(url).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(response.data.message);
        });

        return deferred.promise;
    }

    getPost(id) {
        var deferred = this.$q.defer();
        this.$http.get("https://jsonplaceholder.typicode.com/posts/" + id).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(response.data.message);
        });

        return deferred.promise;
    }
}