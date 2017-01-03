import 'babel-polyfill';
import add from '../src/add';
import chai from 'chai';

let expect = chai.expect;

describe('加法函数的测试', () => {
	// 测试用例的钩子
	before(() => {
		console.log('在本区块的所有测试用例之前执行');
	});
	after(() => {
		console.log('在本区块的所有测试用例之后执行');
	});
	it('1 加 1', () => {
		expect(add(1, 1)).to.be.equal(2); // 断言
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




