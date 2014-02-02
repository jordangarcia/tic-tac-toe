'use strict';

angular.module('tictactoe')
.controller('GameCtrl', ['$scope', 'board', function($scope, board) {
	$scope.board = board;
}]);
