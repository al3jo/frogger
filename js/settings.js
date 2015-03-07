/**
 * Global settings for the game
 */
'use strict';

var Settings = function() {
  /**
   * Number of rows of the map
   */
  this.rows = 5;

  /**
   * Number of columns on the map
   */
  this.cols = 5;

  /**
   * Number of pixels to jump from cell to cell
   */
  this.jump = 100;

  /**
   * number of pixels to jump from enemies horizontally
   */
  this.step = 100;

  /**
   * First index for rows and cols
   */
  this.firstIndex = 0;

  /**
   * The offset in pixels to position the Y coordinate
   */
  this.rowOffset = 400;

  /**
   * Interval to paint the objects on the canvas
   */
  this.paintInterval = 100;

  /**
   * The offset to position the player and enemies within the cell
   */
  this.objectOffset = 85;

  /**
   * Time in ms to create a new player, new enemies, reset the game, etc.
   */
  this.timeForNextObject = 1750;

  /**
   * The speed at which the enemy moves
   */
  this.enemySpeed = 100;

  /**
   * Initial row at which the player is placed
   */
  this.playerInitialRow = 0;

  /**
   * Initial column at which the player is placed.
   */
  this.playerInitialColumn = 2;
};