
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