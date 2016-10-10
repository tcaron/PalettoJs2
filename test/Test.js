
'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");
var engineTest = new Engine();

PalettoTestCase.prototype.testStory1 = function () {

  assertTrue(engineTest.getMarbles()==0);

};


PalettoTestCase.prototype.testStory2 = function () {

  assertTrue(engineTest.beginner()==1);

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
    var board = engineTest.getGameArea();
    assertTrue(engineTest.getAlign(0,"W"));
}

