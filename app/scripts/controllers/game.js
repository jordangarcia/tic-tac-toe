'use strict';

angular.module('tictactoe')
.controller('GameCtrl', ['$scope', 'board', 'winChecker', function($scope, board, winChecker) {
	$scope.game = {
		board: board,
		currentPlayer: 'x',
		winner: null,
		isOver: false
	};

	$scope.restart = function(game) {
		game.board.reset();
		game.winner = null;
		game.isOver = false;
	};

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
		debugger;
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
		} else if (board.isFull()) {
			$scope.game.isOver = true;
		} else {
			$scope.advanceTurn(game);
		}
	};
}]);
