/**
 * This object reprensets a game.
 */
'use strict';

// These are just a convenience set of variables that correspond to class and id names on the css/html.
// The idea is that they are centralized here, so if a name changes, then the code just needs to be updated here.
var score = 'score';
var message = 'js-message';git
var gamesPlayed = 'js-games-played';
var gameStats = 'js-games-stats';

/**
 * This creates a game object.
 */
var Game = function() {
  this.gamesPlayed = 1;
  this.gamesWon = 0;
  this.gamesLost = 0;
  this.isPlaying = true;
};

/**
 * Initialize the game state.
 */
Game.prototype.init = function() {
  this.isPlaying = true;
  document.getElementById(score).getElementsByClassName(message)[0].innerHTML = 'Game in progress...';
  document.getElementById(score).getElementsByClassName(gamesPlayed)[0].innerHTML = this.gamesPlayed;
  document.getElementById(score).getElementsByClassName(gameStats)[0].innerHTML = this.gamesWon + ' / ' + this.gamesLost;
};

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
};

/**
 * Called when a player wins a game, to update stats and reset the game.
 */
Game.prototype.win = function() {
  this.gamesWon++;
  this.isPlaying = false;
  document.getElementById(score).getElementsByClassName(message)[0].innerHTML = 'You won! Restarting...';

  var self = this;
  setTimeout(function(){self.reset();}, settings.timeForNextObject);
};

/**
 * Called when a game is lost, to update stats and reset the game.
 */
Game.prototype.lost = function() {
  this.gamesLost++;
  this.isPlaying = false;
  document.getElementById(score).getElementsByClassName(message)[0].innerHTML = 'You lost! Restarting...';

  var self = this;
  setTimeout(function(){self.reset();}, settings.timeForNextObject);
};
