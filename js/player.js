/**
 * This is a Player object.
 */
'use strict';

/**
 * Constructor for a player object. It will set the initial player state.
 */
var Player = function() {
  this.sprite = 'images/char-boy.png';
  this.init();

  console.log('New player:', this.x, this.y, this.row, this.col);
}

/**
 * Initialize the player with its default values.
 */
Player.prototype.init = function() {
  this.row = settings.playerInitialRow;
  this.col = settings.playerInitialColumn;

  this.x = this.col * settings.jump;
  this.y = settings.rowOffset - (settings.objectOffset * this.row);
}

/**
 * Updates the player
 */
Player.prototype.update = function() {
  if (!game.isPlaying) return;
  this.detectCollisions();
}

/**
 * Handles the input from the player. It will check to see if the move is valid and update the player state accordingly.
 * @param key The key that was pressed.
 */
Player.prototype.handleInput = function(key) {
  if (!game.isPlaying) return;

  //var isInWater = this.row == settings.waterRow;
  var canMoveLeft = this.col > settings.firstIndex;// && !isInWater;
  var canMoveRight = this.col < (settings.cols - 1);// && !isInWater;
  var canMoveUp = (this.row + 1) < settings.waterRow;
  var canMoveDown = this.row > settings.firstIndex;// && !isInWater;

  // Check if the move is valid and adjust the cols and rows accordingly.
  switch(key) {
    // Move on x
    case 'left':
      if (canMoveLeft) {
        this.col--;
      }
      break;
    case 'right':
      if (canMoveRight) {
        this.col++;
      }
      break;

    // Move on y
    case 'up':
      if (canMoveUp) {
        this.row++;
      }
      break;
    case 'down':
      if (canMoveDown) {
        this.row--;
      }
      break;
  }

  // Compute the new coordinates. At the most one value should change per turn, but this avoids code duplication
  this.x = settings.jump * this.col;
  this.y = settings.rowOffset - (settings.objectOffset * this.row);

  // Check if the player won
  if (this.row == (settings.waterRow - 1)) {
    game.win();
  }
}

Player.prototype.detectCollisions = function() {
  if (!game.isPlaying) return;

  var self = this;
  allEnemies.forEach(function(enemy) {
    if (enemy.row == self.row && enemy.col == self.col) {
      game.lost();
    }
  });
}

/**
 * Renders the player on the canvas.
 */
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}