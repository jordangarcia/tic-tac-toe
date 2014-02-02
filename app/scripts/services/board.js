'use strict';

angular.module('tictactoe')
.factory('board', ['makeGrid', 'BOARD_SIZE', function(makeGrid, BOARD_SIZE) {

	/**
	 * Board of nxn dimension
	 */
	function Board(n) {
		this.length = n;
		this.reset();
	}

	/**
	 * Marks a coord on the  board with a val
	 *
	 * @param {Integer} val
	 * @param {Integer} x coord
	 * @param {Integer} y coord
	 */
	Board.prototype.mark = function(val, x, y) {
		this.grid[y][x] = val;
	};

	/**
	 * Gets value at square
	 *
	 * @param {Integer} x coord
	 * @param {Integer} y coord
	 */
	Board.prototype.get = function(x, y) {
		return this.grid[y][x];
	};

	Board.prototype.reset = function() {
		this.grid = makeGrid(BOARD_SIZE);
	};

	Board.prototype.isFull = function() {
		return _.every(this.grid, function(row) {
			return _.every(row, _.identity);
		});
	}

	return new Board(BOARD_SIZE);
}]);
