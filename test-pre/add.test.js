import 'babel-polyfill';
import add from '../src/add';
import chai from 'chai';

let expect = chai.expect;

describe('加法函数的测试', () => {
	let foo = false;
	let bar = false;

	// 测试用例的钩子
	before(() => {
		console.log('在本区块的所有测试用例之前执行');
	});
	after(() => {
		console.log('在本区块的所有测试用例之后执行');
	});
	beforeEach((done) => {
		foo = true;

		setTimeout(() => {
			bar = true;
			done(); // 让mocha结束
		}, 50);
		console.log('在本区块每个测试用例执行之前执行');
	});
	afterEach(() => {
		console.log('在本区块每个测试用例执行之后执行');
	});
	// 跳过这个测试用例，不执行
	it.skip('1 加 1', () => {
		expect(add(1, 1)).to.be.equal(2); // 断言
	});
	it('修改全局变量应该成功', () => {
		expect(foo).to.be.equal(true);
	});
	it('异步修改全局变量应该成功', () => {
		expect(bar).to.be.equal(true);
	})
});




