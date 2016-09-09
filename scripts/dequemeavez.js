var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    $scope.players = [];

    $scope.addIniciative = function (pName, pCA, pIni, pHP, pType) {
        $scope.player = {name: pName, ca: pCA, Ini: pIni, hp: pHP, type: pType};
        
        $scope.players.push($scope.player);
        $scope.sortIniciative($scope.players);

       $scope.clearAdd();      
    };  

    $scope.generateIni = function (pName, pCA, pIni, pHP, pType) {
        pIni = Math.floor((Math.random() * 20) + 1) + parseInt(pIni);

        $scope.addIniciative(pName, pCA, pIni, pHP, pType);
        $scope.clearUpdate();
    };

    $scope.updatePlayer = function (pName, pIni, pCA) {

        for (var i = 0; i < $scope.players.length; i++) {
            if ($scope.players[i].name == pName) {
                $scope.players[i].Ini = pIni;
                $scope.players[i].ca = pCA;
            }  
        }

        $scope.sortIniciative($scope.players);
    }; 

    $scope.removePlayer = function (pName) {

        for (var i = 0; i < $scope.players.length; i++) {
            if ($scope.players[i].name == pName) {
                $scope.players[i].Ini = 0;
            }  
        }

        $scope.sortIniciative($scope.players);
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
        document.getElementById("demage").value = '';
    }; 

    $scope.addHeal = function (pName, heal) {

        heal = parseInt(heal);

        for (var i = 0; i < $scope.players.length; i++) {
            if ($scope.players[i].name == pName) {
                $scope.players[i].hp = parseInt($scope.players[i].hp) + heal;
            }  
        }
        document.getElementById("heal").value = '';
    }; 

    $scope.clearUpdate = function () {
        document.getElementById("pNameSelectIni").value = '';
        document.getElementById("selectedPIniciative").value = '';
        document.getElementById("selectedPCA").value = '';
    };

    $scope.clearAdd = function () {
        document.getElementById("playerName").value = '';
        document.getElementById("playerCA").value = '';
        document.getElementById("playerIni").value = '';
        document.getElementById("playerHP").value = '';
        document.getElementById("playerType").value = '';            
    };

    $scope.sortIniciative = function (players) {
        players.sort(function(a, b){
            return a.Ini-b.Ini
        });

       $scope.players.reverse();
    };
});

