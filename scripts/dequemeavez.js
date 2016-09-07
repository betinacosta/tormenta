var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    $scope.players = [];

    $scope.clear = function () {
        document.getElementById("playerSelect").value = '';
        document.getElementById("playerIniciative").value = '';
        document.getElementById("playerName").value = '';
        document.getElementById("pType").value = '';
        document.getElementById("playerCA").value = '';
        document.getElementById("playerHP").value = '';
        document.getElementById("playerIni").value = '';
    };

    $scope.addPlayer = function (pName, pCA, pIni, pHP, pType) {
        $scope.player = {name: pName, ca: pCA, Ini: pIni, hp: pHP, type: pType};
        
        $scope.players.push($scope.player);

        $scope.players.sort(function(a, b){
            return a.Ini-b.Ini
        });

       $scope.players.reverse();
       $scope.clear();
       
    };  

    $scope.updatePlayer = function (pName, pIni) {

        for (var i = 0; i < $scope.players.length; i++) {
            if ($scope.players[i].name == pName) {
                $scope.players[i].Ini = pIni;
            }  
        }

        $scope.players.sort(function(a, b){
            return a.Ini-b.Ini
        });

       $scope.players.reverse();
       
    }; 

    $scope.removePlayer = function (pName) {

        for (var i = 0; i < $scope.players.length; i++) {
            if ($scope.players[i].name == pName) {
                $scope.players[i].Ini = 0;
            }  
        }

        $scope.players.sort(function(a, b){
            return a.Ini-b.Ini
        });

       $scope.players.reverse();
       $scope.players.pop();
    }; 

    $scope.addDemage = function (pName, demage) {

        demage = parseInt(demage);

        for (var i = 0; i < $scope.players.length; i++) {
            if ($scope.players[i].name == pName) {
                $scope.players[i].hp = parseInt($scope.players[i].hp) - demage;

                if($scope.players[i].hp<=0 && $scope.players[i].type=='foe') {
                    $scope.removePlayer(pName);
                }
            }  
        }
    }; 

    $scope.addHeal = function (pName, heal) {

        heal = parseInt(heal);

        for (var i = 0; i < $scope.players.length; i++) {
            if ($scope.players[i].name == pName) {
                $scope.players[i].hp = parseInt($scope.players[i].hp) + heal;
            }  
        }
    }; 

});

