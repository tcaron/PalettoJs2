'use strict';

var Engine = function (size) {

    var nbMarbles = 0;
    var playerWhitePlay = true;
    var gameArea;
    /*S for normal game board, XL for big game board*/
    if (size == "S") {
         gameArea = new Array(6);
        for (var i = 0; i < gameArea.length; i++) {
            gameArea[i] = new Array(6);
            for (var j = 0; j < 6; j++) {
                gameArea[i][j] = "X";
            }
        }
    }

    if (size =="XL"){

     gameArea = new Array(9);
        for (var i = 0; i<gameArea.length;i++)
        {
            gameArea[i]= new Array(9);
           for (var j = 0; j<9;j++)
           {gameArea[i][j] = "X";}

        }

    }

    this.getGameArea = function(){
      console.log(gameArea);return gameArea;};


    this.getMarbles = function(){
        console.log(nbMarbles);return nbMarbles;};

    this.beginner = function(){
      var player =  this.whoIsPlaying();
     return player;};

     this.getPlayerWhitePlay = function (){

         return playerWhitePlay;
     }

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
        vReturn = true;gameArea[x][y]=marbleColor; nbMarbles++; }
        else{ console.log("Impossible, cet emplacement est déjà occupé");}
        return vReturn;


    }

    this.rotation = function(board, degree){

        var x = new Array(0,0,0,3,3);var y = new Array(0,0,3,0,3);
        var ordreHoraire = [6,3,0,7,4,1,8,5,2]; var ordreAntihoraire = [2,5,8,1,4,7,0,3,6];
        var position = 0; var tab_temp = new Array("0","0","0","0","0","0","0","0","0");
        tab_temp[0]=gameArea[0+x[board]][0+y[board]];tab_temp[1]=gameArea[0+x[board]][1+y[board]];
        tab_temp[2]=gameArea[0+x[board]][2+y[board]];tab_temp[3]=gameArea[1+x[board]][0+y[board]];
        tab_temp[4]=gameArea[1+x[board]][1+y[board]];tab_temp[5]=gameArea[1+x[board]][2+y[board]];
        tab_temp[6]=gameArea[2+x[board]][0+y[board]];tab_temp[7]=gameArea[2+x[board]][1+y[board]];
        tab_temp[8]=gameArea[2+x[board]][2+y[board]];

        for(var i = 0; i < 3 ; i++) { for(var o = 0; o < 3 ; o++)
            {if(degree == 90) gameArea[i+x[board]][o+y[board]] = tab_temp[ordreHoraire[position]];
             else if (degree == -90)gameArea[i+x[board]][o+y[board]] = tab_temp[ordreAntihoraire[position]];
                position++; } }return true; }

    this.getAlign = function (board, marbleColor) {

        var marbles = 0;
        var win = false;
        for(var indX = 0; indX < 6; indX++){ if(gameArea[board][indX] == marbleColor){ marbles++; }}
        if((marbles >= 5) && (gameArea[board][0] != "W") || (marbles >= 5) && (gameArea[board][5] != "W"))
        {console.log("Le joueur "+marbleColor+" a gagner "); win = true;}
        return win;
    }

    this.displayArea=function(){
        var ligne = "";
        for(var i = 0; i < 6 ; i++)
        {
            if(i==3)
                console.log(" ");
            for(var j = 0; j < 6 ; j++)
            {
                if(j == 3)
                    ligne = ligne +" ";
                ligne =  ligne + "["+gameArea[i][j]+"]";
            }
            console.log(ligne);
            ligne = "";
        }
    }


    this.wrongMarble = function (color) {
        var error = true;
        if (playerWhitePlay && color == "B") {

           // throw "erreur"; stop les test
        console.log("En tant que joueur blanc vous ne pouvez pas jouer une bille noire");
        }

        else {
            console.log("En tant que joueur noir vous ne pouvez pas jouer une bille blanche");
           // throw "erreur";
        }
        return error;
    }


    this.playWithText = function (text, numBoard){

        var cmd = text.split(";");
        var location = text.substring(0,2); var rotation = text.substring(2,3);
        this.playMarbles(location);
         if (rotation == "c"){ this.rotation(numBoard,90);}
         if (rotation == "a"){ this.rotation(numBoard,-90);}

    };

    this.setMarbles = function (newNbMarbles){

        newNbMarbles  = nbMarbles;
    }

    this.checkDrawing = function (){
      var drawing = false;

        for (var i = 0 ; i < gameArea ;i++)
        if (this.getMarbles() == 36 && !this.checkDiagonal("W") || !this.checkDiagonal("B")
            || !this.getAlign(i,"W") || !this.getAlign(i,"B")){

            console.log("match nul");
            drawing = true;
        }

     return drawing;
    }
    this.checkDiagonal = function(color){

        var count = 1;
        var win = false;
        if (gameArea[0][0] == color) {
            for (var i = 1; i < gameArea.length; i++) {

                for (var j = 1; j < gameArea[i].length; j++) {

                    if (gameArea[i][j] == color) {

                        count++;
                    } } } }
       if (count >= 5){console.log("le joueur "+color+" a gagné"); win = true;}
       else {console.log("aucune diagonale de trouvé");}
     return win;
    };


    /* Only for XL game board */
    var xlBeginner;
    var xlPlayer;
    var listPlayers;

    this.getXlPlayer = function(){
        console.log(xlPlayer);
        return xlPlayer;
    };

    this.gamerXl = function(nbplayer,choices){
        listPlayers = new Array(nbplayer);
        if (nbplayer == 4){listPlayers =["R", "Y", "G", "B"]; xlBeginner = listPlayers[0];}
        if (nbplayer == 3 ||  nbplayer ==2){listPlayers= choices.split(","); xlBeginner = listPlayers[0];}
        console.log(xlBeginner);
        xlPlayer = xlBeginner;
        return xlBeginner;
    };

    this.nextGamerXl = function(){

        var nPlayer = listPlayers.indexOf(xlPlayer);
        xlPlayer = listPlayers[nPlayer+1];
        return xlPlayer;

    };

    this.randomPlay = function(size){

        var gameArea2 ;
        if (size == "classique"){

            gameArea2 = new Array(6);
        for (var i=0;i<gameArea2.length;i++){gameArea2[i]=new Array(9);
            for (var j =0; j<gameArea2[i].length;j++){gameArea2[i][j]="X";} }
        }
        if (size == "XL"){
            gameArea2 = new Array(9);
            for (var i=0;i<gameArea2.length;i++){gameArea2[i]=new Array(9);
                for (var j =0; j<gameArea2[i].length;j++){gameArea2[i][j]="X";} }
        }

         var min = Math.ceil(0);
         var max = Math.floor(gameArea2.length-1);
         var random = Math.floor(Math.random() * (max - min)) + min;
         var min2= Math.ceil(0);
         var max2 = Math.floor(gameArea2[random].length-1);
         var random2 = Math.floor(Math.random() * (max - min)) + min;

        if (gameArea2[random][random2]=="X"){

            gameArea2[random][random2] = xlPlayer ;
            nbMarbles++;

        }

        else { this.randomPlay(size);}




    };



};



