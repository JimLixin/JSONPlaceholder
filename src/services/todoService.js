export default class TodoService {
    /*@ngInject*/

    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    getTodosByUser(userId) {
        var deferred = this.$q.defer();
        var url = "https://jsonplaceholder.typicode.com/todos" + (userId > 0 ? '?userId=' + userId : '');
        this.$http.get(url).then(function successCallback(response) {
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            deferred.reject(response.data.message);
        });

        return deferred.promise;
    }
}