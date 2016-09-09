var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    $scope.players = [];

    $scope.addIniciative = function (pName, pCA, pIni, pHP, pType) {
        $scope.player = {name: pName, ca: pCA, Ini: pIni, hp: pHP, type: pType};

        if($scope.checkEmptyFieldsAdd($scope.player)) {
            $scope.players.push($scope.player);
            $scope.sortIniciative($scope.players);

            $scope.clearAdd();
        }     
    };  

    $scope.generateIni = function (pName, pCA, pIni, pHP, pType) {
        pIni = Math.floor((Math.random() * 20) + 1) + parseInt(pIni);

        $scope.addIniciative(pName, pCA, pIni, pHP, pType);
    };

    $scope.updatePlayer = function (pName, pIni, pCA) {

        if ($scope.checkEmptyFieldsUpdate(pName, pIni)) {
            for (var i = 0; i < $scope.players.length; i++) {
                if ($scope.players[i].name == pName) {
                    $scope.players[i].Ini = pIni;
                    if (pCA != null) 
                        $scope.players[i].ca = pCA;
                }
            }
            $scope.sortIniciative($scope.players);
            $scope.clearUpdate();
        }
    }; 

    $scope.checkEmptyFieldsUpdate = function (pName, pIni) {

        if (pIni == null) {
            $scope.changeBorderColor('selectedPIni', 'red');
            $scope.clearSingleField('selectedPIni');
        } else {
            $scope.changeBorderColor('selectedPIni', '');
        }

        if (pName == null) {
            $scope.changeBorderColor('selectedPName', 'red');
            $scope.clearSingleField('selectedPName');
        } else {
            $scope.changeBorderColor('selectedPName', '');
        }

        if (pName == null || pIni == null)
            return false;
        else
            return true;
    };

    $scope.checkEmptyFieldsAdd = function (player) {

        if (player.name == null) {
            $scope.changeBorderColor('playerName', 'red');
            $scope.clearSingleField('playerName');
        } else {
            $scope.changeBorderColor('playerName', '');
        }

        if (player.ca == null) {
            $scope.changeBorderColor('playerCA', 'red');
            $scope.clearSingleField('playerCA');
        } else {
            $scope.changeBorderColor('playerCA', '');
        }

        if (player.Ini == null) {
            $scope.changeBorderColor('playerIni', 'red');
            $scope.clearSingleField('playerIni');
        } else {
            $scope.changeBorderColor('playerIni', '');
        }

        if (player.hp == null) {
            $scope.changeBorderColor('playerHP', 'red');
            $scope.clearSingleField('playerHP');
        } else {
            $scope.changeBorderColor('playerHP', '');
        }

        if (player.type == null) {
            $scope.changeBorderColor('playerType', 'red');
            $scope.clearSingleField('playerType');
        } else {
            $scope.changeBorderColor('playerType', '');
        }

        if (player.name == null || player.ca == null || player.hp == null || player.Ini == null || player.type == null) {
            return false;
        } else {
            return true;
        }
    };

    $scope.changeBorderColor = function (id, color) {
        document.getElementById(id).style.borderColor = color;
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
        document.getElementById("selectedPName").value = '';
        $scope.selectedPName = null;
        document.getElementById("selectedPIni").value = '';
        $scope.selectedPIni = null;
        document.getElementById("selectedPCA").value = '';
        $scope.selectedPCA = null;
    };

    $scope.clearAdd = function () {
        $scope.clearSingleField('playerName', $scope.playerName);
        $scope.playerName = null;
        $scope.clearSingleField('playerCA', $scope.playerCA);
        $scope.playerCA = null;
        $scope.clearSingleField('playerIni', $scope.playerIni);
        $scope.playerIni = null;
        $scope.clearSingleField('playerHP', $scope.playerHP);
        $scope.playerHP = null;
        $scope.clearSingleField('playerType', $scope.playerType);   
        $scope.playerType = null;      
    };

    $scope.clearSingleField = function (id) {
        document.getElementById(id).value = '';
    };

    $scope.sortIniciative = function (players) {
        players.sort(function(a, b){
            return a.Ini-b.Ini
        });

       $scope.players.reverse();
    };
});

