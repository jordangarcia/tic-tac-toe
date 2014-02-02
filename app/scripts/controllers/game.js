'use strict';

angular.module('tictactoe')
.controller('GameCtrl', ['$scope', 'board', 'winChecker', 'makeGrid', 'BOARD_SIZE',
function($scope, board, winChecker, makeGrid, BOARD_SIZE) {

	// state of game
	$scope.game = {
		highlight: makeGrid(BOARD_SIZE, 0),
		board: board,
		currentPlayer: 'x',
		winner: null,
		isOver: false
	};
	/**
	 * Function to handle converting a player marker to name
	 *
	 * @param {String}
	 * @return {String}
	 */
	$scope.playerName = function(player) {
		var names = {
			x: 'A',
			o: 'B'
		};
		return names[player];
	};

	/**
	 * @param {Object} game
	 */
	$scope.restart = function(game) {
		game.highlight = makeGrid(BOARD_SIZE, 0),
		game.board.reset();
		game.winner = null;
		game.isOver = false;
	};


	/**
	 * @param {Object} game
	 */
	$scope.advanceTurn = function(game) {
		$scope.game.currentPlayer = (game.currentPlayer === 'x') ? 'o' : 'x';
	};

	/**
	 * Plays a turn at square
	 *
	 * @param {Integer} x coord
	 * @param {Integer} y coord
	 */
	$scope.play = function(game, x, y) {
		if (game.isOver) {
			return;
		}
		if (game.board.get(x, y)) {
			// already value present, cant play
			return;
		}

		game.board.mark(game.currentPlayer, x, y);

		var winner = winChecker(game.board.grid);
		if (winner) {
			$scope.game.isOver = true;
			$scope.game.winner = winner.player;
			// highlight where the win occurred
			$scope.game.highlight = winner.grid;
		} else if (board.isFull()) {
			$scope.game.isOver = true;
		} else {
			$scope.advanceTurn(game);
		}
	};
}]);
