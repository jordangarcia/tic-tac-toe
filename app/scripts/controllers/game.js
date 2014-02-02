'use strict';

angular.module('tictactoe')
.controller('GameCtrl', ['$scope', 'board', function($scope, board) {
	$scope.board = board;
	$scope.currentPlayer = 'x';

	$scope.advanceTurn = function() {
		$scope.currentPlayer = ($scope.currentPlayer === 'x') ? 'o' : 'x';
	};

	$scope.checkGameEnd = function() {
	};

	/**
	 * Plays a turn at square
	 *
	 * @param {Integer} x coord
	 * @param {Integer} y coord
	 */
	$scope.play = function(currentPlayer, x, y) {
		if (board.get(x, y)) {
			// already value present, cant play
			return;
		}
		board.mark(currentPlayer, x, y);
		$scope.checkGameEnd();
		$scope.advanceTurn();
	};
}]);
