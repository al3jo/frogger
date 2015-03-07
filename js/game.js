/**
 * This object reprensets a game.
 */
'use strict';

/**
 * This creates a game object.
 */
var Game = function() {
  this.gamesPlayed = 1;
  this.gamesWon = 0;
  this.gamesLost = 0;
  this.isPlaying = true;
}

/**
 * Initialize the game state.
 */
Game.prototype.init = function() {
  this.currentLevel = settings.firstLevel;
  this.isPlaying = true;
  document.getElementById('header').getElementsByClassName('js-message')[0].innerHTML = 'Game in progress...';
  document.getElementById('header').getElementsByClassName('js-games-played')[0].innerHTML = this.gamesPlayed;
  document.getElementById('header').getElementsByClassName('js-games-stats')[0].innerHTML = this.gamesWon + ' / ' + this.gamesLost;
}

/**
 * Reset the game state. This is called when the game is over and should be prepared to start over.
 * Most notably, it calls 'init()' and then reset the settings that were affected during the game to their original value.
 */
Game.prototype.reset = function() {
  this.init();
  this.gamesPlayed++;

  settings.enemySpeed = 100;
  player.init();
  allEnemies.forEach(function(enemy) {
    enemy.isAlive = false;
  });
}

/**
 * Called when a player wins a game, to update stats and reset the game.
 */
Game.prototype.win = function() {
  this.gamesWon++;
  this.isPlaying = false;
  document.getElementById('header').getElementsByClassName('js-message')[0].innerHTML = 'You won!';

  var self = this;
  setTimeout(function(){self.reset();}, settings.timeForNextObject);
}

/**
 * Called when a game is lost, to update stats and reset the game.
 */
Game.prototype.lost = function() {
  this.gamesLost++;
  this.isPlaying = false;
  document.getElementById('header').getElementsByClassName('js-message')[0].innerHTML = 'You lost!';

  var self = this;
  setTimeout(function(){self.reset();}, settings.timeForNextObject);
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
