'use strict';

angular.module('tictactoe')
.factory('board', ['BOARD_SIZE', function(BOARD_SIZE) {
	/**
	 * Board of nxn dimension
	 */
	function Board(n) {
		this board = [];
		for (var i = 0; i < n; i++) {
			board.push([]);
		}
	}

	/**
	 * Marks a coord on the  board with a val
	 *
	 * @param {Integer} val
	 * @param {Integer} x coord
	 * @param {Integer} y coord
	 */
	Board.prototype.mark = function(val, x, y) {
		this.board[x][y] = val;
	};

	return new Board(BOARD_SIZE);
}]);
