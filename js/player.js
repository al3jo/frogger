/**
 * This is a Player object.
 */
'use strict';

/**
 * Constructor for a player object. It will set the initial player state.
 */
var Player = function() {
  this.row = settings.playerInitialRow;
  this.col = settings.playerInitialColumn;

  this.x = this.col * settings.jump;
  this.y = settings.cols * settings.objectOffset;

  this.sprite = 'images/char-boy.png';
}

/**
 * Updates the player
 */
Player.prototype.update = function() {
 // noop
}

/**
 * Handles the input from the player. It will check to see if the move is valid and update the player state accordingly.
 * @param key The key that was pressed.
 */
Player.prototype.handleInput = function(key) {
  var isInWater = this.row == settings.waterRow;
  var canMoveLeft = this.col > settings.firstIndex && !isInWater;
  var canMoveRight = this.col < (settings.cols - 1) && !isInWater;
  var canMoveUp = !isInWater;
  var canMoveDown = this.row > settings.firstIndex && !isInWater;

  switch(key) {
    // Move on x
    case 'left':
      if (canMoveLeft) {
        this.col--;
        this.x = settings.jump * this.col;
      }
      break;
    case 'right':
      if (canMoveRight) {
        this.col++;
        this.x = settings.jump * this.col;
      }
      break;

    // Move on y
    case 'up':
      if (canMoveUp) {
        this.row++;
        this.y = settings.rowOffset - (settings.objectOffset * this.row);
      }
      break;
    case 'down':
      if (canMoveDown) {
        this.row--;
        this.y = settings.rowOffset - (settings.objectOffset * this.row);
      }
      game.nextLevel();
      break;
  }
  // gotta reevaluate the new position
  isInWater = this.row == settings.waterRow;
  if (isInWater) {
    console.log('Is in water..');
    setTimeout(createNewPlayer, settings.timeForNextObject);
  }
}

/**
 * Renders the player on the canvas.
 */
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}