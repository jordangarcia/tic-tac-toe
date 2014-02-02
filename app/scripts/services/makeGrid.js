'use strict';

angular.module('tictactoe')
.factory('makeGrid', ['$filter', function($filter) {
	return function makeGrid(size, initialValue) {
		// create an array [0, 1, ... , size - 1]
		var size = $filter('range')([], size);

		return size.map(function(y) {
			return size.map(function(x) {
				return initialValue;
			});
		});
	}
}]);
