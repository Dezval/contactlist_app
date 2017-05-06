var myApp = angular.module('myApp',[]);

// in LA

myApp.controller('AppCtrl', ['$scope', '$http',
    function($scope, $http){

    var refresh = function(){
        console.log("message from controller");

        $http.get('/contactlist').then(function(response){
            console.log("Got data!");
            $scope.contactlist = response.data;
        });
    }

    refresh();

    $scope.addContact = function(){
        console.log($scope.contact);
        $http.post('/contactlist', $scope.contact).then(function(response){
            console.log(response);
            refresh();
        });
    };

    $scope.remove = function(id){
        console.log(id);
        $http.delete('/contactlist/' + id).then(function(response){
            refresh();
        });
    };

}]);