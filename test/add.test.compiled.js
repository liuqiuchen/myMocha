'use strict';

require('babel-polyfill');

var _add = require('../src/add');

var _add2 = _interopRequireDefault(_add);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;

describe('加法函数的测试', function () {
	before(function () {
		console.log('before');
	});
	it('1 加 1', function () {
		expect((0, _add2.default)(1, 1)).to.be.equal(2); // 断言
	});
});

// 异步的测试
/*describe('异步的测试', () => {
	it('测试应该5000毫秒后结束', () => {
		let x = true;
		let f = () => {
			x = false;
			expect(x).to.be.not.ok;
			done(); // 让mocha结束
		};
		setTimeout(f, 4000);
	});
	it('异步请求应该返回一个对象', () => {
		return fetch('https://api.github.com')
	    .then(function(res) {
	      return res.json();
	    }).then(function(json) {
	      expect(json).to.be.an('object');
	    });
	});
});*/
