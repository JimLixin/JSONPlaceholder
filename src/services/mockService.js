//import angular from 'angular';

export default class DataService {
    /*@ngInject*/

    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    loadData() {
        //return ['one', 'two', 'three'];
        var deferred = this.$q.defer();
        this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(response.data.message);
        });

        return deferred.promise;
    }
}