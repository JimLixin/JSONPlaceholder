export default class CommentService {
    /*@ngInject*/

    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    getComments(postId) {
        var deferred = this.$q.defer();
        var url = 'https://jsonplaceholder.typicode.com/comments';
        if (postId) {
            url += '?postId=' + postId;
        }
        //console.log(url);
        this.$http.get(url).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(response.data.message);
        });

        return deferred.promise;
    }

    getComment(id) {
        var deferred = this.$q.defer();
        this.$http.get("https://jsonplaceholder.typicode.com/comments/" + id).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(response.data.message);
        });

        return deferred.promise;
    }
}