'use strict';

angular.module('tictactoe')
.factory('board', ['BOARD_SIZE', function(BOARD_SIZE) {
	/**
	 * Board of nxn dimension
	 */
	function Board(n) {
		this.board = [];
		for (var i = 0; i < n; i++) {
			var row = [];
			for (var j = 0; j < n; j++) {
				row.push(0);
			}
			this.board.push(row);
		}
		return this.board;
	}

	/**
	 * Marks a coord on the  board with a val
	 *
	 * @param {Integer} val
	 * @param {Integer} x coord
	 * @param {Integer} y coord
	 */
	Board.prototype.mark = function(val, x, y) {
		this.board[y][x] = val;
	};

	Board.prototype.size = function() {
		return this.board.length;
	}

	return new Board(BOARD_SIZE);
}]);
