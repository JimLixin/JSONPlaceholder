export default class UserService {
    /*@ngInject*/

    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    getUsers() {
        var deferred = this.$q.defer();
        this.$http.get("https://jsonplaceholder.typicode.com/users").then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(response.data.message);
        });

        return deferred.promise;
    }

    getUser(id) {
        var deferred = this.$q.defer();
        this.$http.get("https://jsonplaceholder.typicode.com/users/" + id).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(response.data.message);
        });

        return deferred.promise;
    }
}