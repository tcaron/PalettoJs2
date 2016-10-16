
'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");
var engineTest = new Engine("S");

PalettoTestCase.prototype.testStory1 = function () {

  assertTrue(engineTest.getMarbles()==0);

};


PalettoTestCase.prototype.testStory2 = function () {

  assertTrue(engineTest.getPlayerWhitePlay());

};

PalettoTestCase.prototype.testStory3 = function () {

  assertTrue(engineTest.playMarbles("a1")== true);

};

PalettoTestCase.prototype.testStory4 = function () {

  assertTrue(engineTest.getMarbles() == 1);

};

PalettoTestCase.prototype.testStory5 = function () {
    engineTest.rotation(1,90);
    var board = engineTest.getGameArea();
     assertTrue(board[0][2]=="W");
}

PalettoTestCase.prototype.testStory6 = function(){

  assertTrue(engineTest.nextPlayer() == "B");

}

PalettoTestCase.prototype.testStory7 = function(){

    engineTest.playMarbles("a1");
    var board = engineTest.getGameArea();
    assertTrue(board[0][0]=="B");
    assertTrue(engineTest.getMarbles() == 2);

}

PalettoTestCase.prototype.testStory8 = function(){


    engineTest.rotation(1,-90);
    var board = engineTest.getGameArea();
    assertTrue(board[0][0]=="W");
    assertTrue(board[2][0]=="B");

}

PalettoTestCase.prototype.testStory9 = function(){

     engineTest.nextPlayer();
     engineTest.playMarbles("a3");
     assertTrue(engineTest.nextPlayer() == "W");

}

PalettoTestCase.prototype.testStory10 = function(){

    engineTest.playMarbles("b1");
    engineTest.rotation(1,90);

    engineTest.nextPlayer();
    engineTest.playMarbles("a2");
    engineTest.rotation(1,-90);

    engineTest.nextPlayer();
    engineTest.playMarbles("c1");
    engineTest.rotation(1,90);

    engineTest.nextPlayer();
    engineTest.playMarbles("a3");
    engineTest.rotation(1,-90);

    engineTest.nextPlayer();
    engineTest.playMarbles("d1");
    engineTest.rotation(2,-90);

    engineTest.nextPlayer();
    engineTest.playMarbles("f3");
    engineTest.rotation(2,90)


    var board = engineTest.getGameArea();
    assertTrue(board[0][0] == "W");
    assertTrue(board[0][1] == "W");
    assertTrue(board[0][2] == "W");
    assertTrue(board[0][3] == "W");

    assertTrue(board[2][0] == "B");
    assertTrue(board[2][1] == "B");
    assertTrue(board[2][2] == "B");
    assertTrue(board[2][3] == "B");

    assertTrue(engineTest.getMarbles() == 8);
}

PalettoTestCase.prototype.testStory11 = function() {

    engineTest.nextPlayer();
    engineTest.playMarbles("e1");
    assertTrue(engineTest.getAlign(0,"W"));
}

// on recommence une partie
var engineTest2 = new Engine("S");

PalettoTestCase.prototype.testStory12 = function(){
   var board = engineTest2.getGameArea();

    engineTest2.playWithText("c4cbl",3);
    engineTest2.nextPlayer();
    engineTest2.playWithText("d4abr",3);
    engineTest2.playWithText("c3ctl",2);
    engineTest2.nextPlayer();
    engineTest2.playWithText("c3ctl",2);
    engineTest2.nextPlayer();
    engineTest2.playWithText("c4cbl",3);
    engineTest2.nextPlayer();
    engineTest2.playWithText("e5cbr",2);
    engineTest2.nextPlayer();
    engineTest2.playWithText("b1ctl",1);
    engineTest2.nextPlayer();
    engineTest2.playWithText("b2ctr",1);
    engineTest2.nextPlayer();
    engineTest2.playWithText("c4cbl",3);
    engineTest2.nextPlayer();
    engineTest2.playWithText("c3");

    assertTrue(engineTest2.checkDiagonal("B"));

}

//on recommence encore une partie
var engineTest3 = new Engine("S");
PalettoTestCase.prototype.testStory13 = function(){

    assertTrue(engineTest3.beginner() == "B");

}

//on recommence encore une partie
var engineTest5 = new Engine("S");
PalettoTestCase.prototype.testStory14 = function(){

    engineTest5.setMarbles(36);
    assertTrue(!engineTest5.checkDrawing());

}

//on recommence encore une partie
var engineTest4 = new Engine("S");
PalettoTestCase.prototype.testStory15 = function () {

    assertTrue(engineTest4.wrongMarble("B"));

}


var engineXl = new Engine("XL");
PalettoTestCase.prototype.testStory16 = function () {
   var board = engineXl.getGameArea();
   assertTrue(board.length == 9);
   assertTrue(engineXl.gamerXl(4,"")=="R");

}


PalettoTestCase.prototype.testStory17 = function(){

     assertTrue(engineXl.getXlPlayer() == "R");
     engineXl.nextGamerXl();
     assertTrue(engineXl.getXlPlayer() == "Y");
     engineXl.nextGamerXl();
     assertTrue(engineXl.getXlPlayer() == "G");
     engineXl.nextGamerXl();
    assertTrue(engineXl.getXlPlayer() == "B");
}

var engineXl2 = new Engine("XL")
PalettoTestCase.prototype.testStory18 = function(){

     engineXl2.gamerXl(3,"Rouge,Blanc,Bleu");
     assertTrue(engineXl2.getXlPlayer() == "Rouge");
     engineXl2.nextGamerXl()
     assertTrue(engineXl2.getXlPlayer() == "Blanc");
     engineXl2.nextGamerXl()
     assertTrue(engineXl2.getXlPlayer() == "Bleu");

}

var engineXl3 = new Engine("XL");
PalettoTestCase.prototype.testStory19 = function(){

    engineXl3.gamerXl(2,"BLANC,NOIR");
    engineXl3.randomPlay("classique");
    assertTrue(engineXl3.getMarbles() == 1);

}

var engineXl4 = new Engine("XL");

PalettoTestCase.prototype.testStory20 = function(){

    engineXl4.gamerXl(4,"");
    engineXl4.randomPlay("XL");
    assertTrue(engineXl4.getMarbles() == 1);

}
