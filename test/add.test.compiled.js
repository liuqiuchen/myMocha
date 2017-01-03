'use strict';

require('babel-polyfill');

var _add = require('../src/add');

var _add2 = _interopRequireDefault(_add);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;

describe('加法函数的测试', function () {
	var foo = false;
	var bar = false;

	// 测试用例的钩子
	before(function () {
		console.log('在本区块的所有测试用例之前执行');
	});
	after(function () {
		console.log('在本区块的所有测试用例之后执行');
	});
	beforeEach(function (done) {
		foo = true;

		setTimeout(function () {
			bar = true;
			done(); // 让mocha结束
		}, 50);
		console.log('在本区块每个测试用例执行之前执行');
	});
	afterEach(function () {
		console.log('在本区块每个测试用例执行之后执行');
	});

	it.skip('1 加 1', function () {
		expect((0, _add2.default)(1, 1)).to.be.equal(2); // 断言
	});
	it('修改全局变量应该成功', function () {
		expect(foo).to.be.equal(true);
	});
	it('异步修改全局变量应该成功', function () {
		expect(bar).to.be.equal(true);
	});
});
