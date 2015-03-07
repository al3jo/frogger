/**
 * This is the main file that creates all the objects to play.
 */
'use strict';

/**
 * A global reference to the settings of the game.
 */
var settings = new Settings();

/**
 * A global reference to an array that contains all the enemies currently available.
 */
var allEnemies = [new Enemy()];

/**
 * A global reference to the player that is currently playing
 */
var player;

/**
 * A glocal reference to the game that is being played.
 */
var game = new Game();

// This call will initialize the game
game.init();

// This will create the player that is playing the game. The idea is to have only one player at a time.
createNewPlayer();

// This function will create a player. If a player currently exists then it will notify about it.
function createNewPlayer() {
  if (player == undefined) {
    player = new Player();
  }
  player.init();
}

// This interval handles the creation of enemies. New enemies will appear at the rate of this interval.
var enemiesCreator = setInterval(function () {
  if (!game.isPlaying) return;
  allEnemies.push(new Enemy());
}, settings.timeForNextObject);

// This listens for key presses and sends them to the player to react.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
