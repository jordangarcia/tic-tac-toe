'use strict';

describe('service/winChecker', function() {
	var winChecker;
	var x = 'x';
	var y = 'y';

	beforeEach(function() {
		module('tictactoe');

		inject(function($injector) {
			winChecker = $injector.get('winChecker');
		});
	});

	it("should correctly find a row win", function() {
		var grid = [
			[x, x, y],
			[x, x, x],
			[y, y, x]
		];

		var result = winChecker(grid);

		expect(result.player).toEqual(x)
		expect(result.type).toEqual('row')
		expect(result.ind).toEqual(1)
	});

	it("should correctly find a column win", function() {
		var grid = [
			[x, y, y],
			[y, y, x],
			[x, y, x]
		];

		var result = winChecker(grid);

		expect(result.player).toEqual(y)
		expect(result.type).toEqual('column')
		expect(result.ind).toEqual(1)
	});

	it("should correctly find a diagonal win", function() {
		var grid = [
			[x, y, y],
			[x, y, x],
			[y, x, x]
		];

		var result = winChecker(grid);

		expect(result.player).toEqual(y)
		expect(result.type).toEqual('diagonal')
		expect(result.ind).toEqual(1)
	});

	it("should return undefined if there is no win", function() {
		var grid = [
			[x, y, y],
			[y, y, x],
			[x, x, y]
		];

		var result = winChecker(grid);

		expect(result).toBe(undefined);
	});
});
