'use strict';

angular.module('tictactoe')
.factory('winChecker', [function() {
	/**
	 * @param {Array} grid
	 * @param {Integer} ind (0-based)
	 * @return {Array}
	 */
	function col(grid, ind) {
		return grid.map(function(row) {
			return row[ind];
		});
	}

	function same(arr) {
		var compare = arr[0];
		return _.every(arr, function(val) {
			return val === compare;
		});
	}

	/**
	 * Gets an array representing the diagonal TL -> BR (rightToLeft=false) or TR->BL (rightToLeft=true)
	 *
	 * @param {Array} grid
	 * @param {Integer} dir
	 * @return {Array}
	 */
	function diag(grid, rightToLeft) {
		var ind;
		var len = grid.length;
		return grid.map(function(row, index) {
			return row[(rightToLeft) ? len - index - 1 : index];
		});
	}

	/**
	 * Checks the winning condition on a NxN grid
	 */
	function checkWin(grid) {
		// check row wins
		var player;
		// len of row
		var len = grid.length;
		// the type of win (row, column, diagonal)
		var type;
		// the index of the type of win
		// eg: the first row would be ind 1 or the Top left to bottom right diag would be 0
		var ind;

		// return value data structure
		var ret;

		if (!type) {
			for (var i = 0; i < len; i++) {
				if (same(grid[i])) {
					// get the player x or y
					player = grid[i][0];
					ind = i;
					type = 'row';
					break;
				}
			}
		}

		if (!type) {
			for (var i = 0; i < len; i++) {
				var arr = col(grid, i);
				if (same(arr)) {
					// get the player x or y
					player = arr[0];
					ind = i;
					type = 'column';
					break;
				}
			}
		}

		if (!type) {
			for (var i = 0; i < 2; i++) {
				var arr = diag(grid, i);
				if (same(arr)) {
					// get the player x or y
					player = arr[0];
					ind = i;
					type = 'diagonal';
					break;
				}
			}
		}

		if (type) {
			ret = {
				type: type,
				player: player,
				ind: ind,
			};
		}

		return ret;
	}

	return checkWin;
}]);
