
'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");
var engineTest = new Engine();

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
var engineTest2 = new Engine();

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
var engineTest3 = new Engine();
PalettoTestCase.prototype.testStory13 = function(){

    assertTrue(engineTest3.beginner() == "B");

}

//on recommence encore une partie
var engineTest5 = new Engine();
PalettoTestCase.prototype.testStory14 = function(){

    engineTest5.setMarbles(36);
    assertTrue(!engineTest5.checkDrawing());

}

//on recommence encore une partie
var engineTest4 = new Engine();
PalettoTestCase.prototype.testStory15 = function () {

    assertTrue(engineTest4.wrongMarble("B"));

}

