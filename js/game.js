/**
 * This object reprensets a game.
 */
'use strict';

/**
 * This creates a game object.
 */
var Game = function() {
}

/**
 * Initialize the game state.
 */
Game.prototype.init = function() {
  this.currentLevel = settings.firstLevel;
  console.log('Current level', this.currentLevel);
  console.log('Current speed', settings.enemySpeed);
}

/**
 * Reset the game state. This is called when the game is over and should be prepared to start over.
 * Most notably, it calls 'init()' and then reset the settings that were affected during the game to their original value.
 */
Game.prototype.reset = function() {
  this.init();
  settings.enemySpeed = 100;
}

/**
 * Advance the game to the next level.
 * This will adjust the settings so the difficulty is increased as the level gets higher.
 */
Game.prototype.nextLevel = function() {
  this.currentLevel++;
  settings.enemySpeed -= game.currentLevel * settings.difficultyFactor;

  console.log('Current level', this.currentLevel);
  console.log('Current speed', settings.enemySpeed);
}
