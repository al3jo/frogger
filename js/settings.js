'use strict';

var Settings = function() {
  // Overall settings
  this.levels = 5; // Number of levels of the game
  this.rows = 6; // Number of rows of the map
  this.waterRow = this.rows - 1; // the water row
  this.cols = 5; // Number of cols of the map
  this.jump = 100; // number of pixels to jump from cell to cell
  this.step = 100; // number of pixels to jump from enemies horizontally
  this.firstIndex = 0; // First index for rows and cols
  this.rowOffset = 400; // The offset in pixels to position the Y coordinate.
  this.paintInterval = 100; // interval to paint the objects on the canvas
  this.objectOffset = 85; // The offset to position the player and enemies within the cell
  this.timeForNextObject = 1750; // time in ms to create a new player and new enemies
  this.enemySpeed = 100; // the speed at which the enemy moves
  this.difficultyFactor = 10;
  this.firstLevel = 1; // the first level of the game

  // Player initial settings
  this.playerInitialRow = 0;
  this.playerInitialColumn = 2;
}