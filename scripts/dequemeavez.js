var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    $scope.players = [];

    $scope.addPlayer = function (pName, pCA, pIni, pHP, pType) {
        $scope.player = {name: pName, ca: pCA, Ini: pIni, hp: pHP, type: pType};
        
        $scope.players.push($scope.player);

        $scope.players.sort(function(a, b){
            return a.Ini-b.Ini
        });

       $scope.players.reverse();
       console.log($scope.players);
       document.getElementById("cu").reset();
    };  
});

