'use strict';

angular.module('tictactoe')
.directive('board', function() {
	return {
		restrict: 'E',
		scope: {
			board: '=src',
			onClick: '@'
		},
		templateUrl: '/views/board.html',
		link: function(scope) {
		}
	}
});
