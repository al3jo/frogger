/**
 * This object represents an enemy. They will be the bugs that run from left to right on the screen.
 */
'use strict';

/**
 * This function creates a new enemy. It will initialize all the values to their defaults.
 * The X value will be dynamic however Y will be constant, so X wont be stored. It's computed at render time
 * An enemy knows his current row and column. Also his Y coordinate (which is constant and determined by the row) and
 * can compute his X coordinate with its information.
 *
 * The row at which the enemy is created is randomly selected.
 */
var Enemy = function() {
  this.row = Math.floor(Math.random() * (settings.rows - 1)); // remove the water row
  this.col = settings.firstIndex;
  this.y = settings.rowOffset - (settings.objectOffset * this.row);

  this.sprite = 'images/enemy-bug.png';
  this.isAlive = true;
  this.time = 0;
}

/**
 * Update the enemy's position. It will update the column, cause the enemy is moving to the left.
 * Note that when the enemy is outside the board, its 'isAlive' value is marked as false. This will mean the enemy
 * must (and will be) destroyed so we don't have memory leaks.
 *
 * @param dt The time, in milliseconds, that has passed since the last update.
 */
Enemy.prototype.update = function(dt) {
  if (!game.isPlaying) return;
  this.time += Math.round(dt * settings.paintInterval);
  if (this.time >= settings.enemySpeed) {
    this.time = 0;
    this.col++;

    // When the enemy gets out of the canvas, mark it for deletion.
    if (this.col > settings.cols) {
      this.isAlive = false;
    }
  }
}

/**
 * Draw the enemy on the screen. It computes the X coordinate with the current enemy's values.
 */
Enemy.prototype.render = function() {
  var x = this.col * settings.step;
  ctx.drawImage(Resources.get(this.sprite), x, this.y);
}