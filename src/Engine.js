'use strict';

var Engine = function () {

    var nbMarbles = 0;
    var playerWhitePlay = true;

    var gameArea = new Array(6);
    for(var i = 0; i < gameArea.length ; i++)
    {   gameArea[i] = new Array(6);
        for(var j = 0; j < 6 ; j++)
        { gameArea[i][j] = "X";}
    }

    //retourne le plateau de jeu
    this.getGameArea = function(){
      console.log(gameArea);return gameArea;};

    //retourne le nombre de billes sur le plateau
    this.getMarbles = function(){
        console.log(nbMarbles);return nbMarbles;};

    //retourne le joueur qui commence
    this.beginner = function(){
     return playerWhitePlay;};


    this.whoIsPlaying=function(){
        var color = "B";
        if(nbMarbles%2 != 0)
        {playerWhitePlay = false;color = "W";}
        else{playerWhitePlay= true; color = "B";}
        return color;};



    this.nextPlayer = function(){
        var marbleColor = "B";
        if ( this.whoIsPlaying() == "W") {marbleColor = "B";}
        else { marbleColor = "W";}
        return marbleColor;
    };


    this.playMarbles = function(location){

       var vReturn = false; var marbleColor = "B";
        if(playerWhitePlay){marbleColor="W";}
        var x = location.charCodeAt(1) - 49;
        var y = location.charCodeAt(0) - 97;
        if (gameArea[x][y] == "X"){
        vReturn = true;gameArea[x][y]=marbleColor; nbMarbles++;

        }
        else {

           console.log("Impossible, cet emplacement est déjà occupé");
        };

        return vReturn;
    }




    this.rotation = function(board, degree){
        var DeltaX = new Array(0,0,0,3,3);
        var DeltaY = new Array(0,0,3,0,3);
        var ordreHoraire = [6,3,0,7,4,1,8,5,2];
        var ordreAntihoraire = [2,5,8,1,4,7,0,3,6];
        var position = 0;

        var tab_temp = new Array("0","0","0","0","0","0","0","0","0");
        tab_temp[0] = gameArea[0+DeltaX[board]][0+DeltaY[board]];
        tab_temp[1] = gameArea[0+DeltaX[board]][1+DeltaY[board]];
        tab_temp[2] = gameArea[0+DeltaX[board]][2+DeltaY[board]];
        tab_temp[3] = gameArea[1+DeltaX[board]][0+DeltaY[board]];
        tab_temp[4] = gameArea[1+DeltaX[board]][1+DeltaY[board]];
        tab_temp[5] = gameArea[1+DeltaX[board]][2+DeltaY[board]];
        tab_temp[6] = gameArea[2+DeltaX[board]][0+DeltaY[board]];
        tab_temp[7] = gameArea[2+DeltaX[board]][1+DeltaY[board]];
        tab_temp[8] = gameArea[2+DeltaX[board]][2+DeltaY[board]];

        for(var i = 0; i < 3 ; i++)
        {
            for(var o = 0; o < 3 ; o++)
            {
                if(degree == 90)
                    gameArea[i+DeltaX[board]][o+DeltaY[board]] = tab_temp[ordreHoraire[position]];
                else if (degree == -90)
                    gameArea[i+DeltaX[board]][o+DeltaY[board]] = tab_temp[ordreAntihoraire[position]];

                position++;
            }
        }

        console.log("Le joueur "+ this.whoIsPlaying()+ " a fait une rotation du plateau " +gameArea + " de " + degree + " degres" );
        return true;
    }
};



