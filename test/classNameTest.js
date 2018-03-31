// const { assert } = chai;
// const className = require('../src/className.js');
// const { addClass } = className;

describe('addClass', () => {
	it('should add class into element', () => {
		const element = { className: '' };

		addClass(element, 'test-class');
		console.log(element.className);
		assert.equal(element.className, 'test-class');
	});

	it('should not add a class which already exists in element', () => {
		const element = { className: 'hello world exists' };

		addClass(element, 'exists');
		console.log(element.className);

		const numClasses = element.className.split(' ').length;
		console.log(element.className.split(' '));

		assert.equal(numClasses, 3);
	});

	it('should append new class after existing one', () => {
		const element = { className: 'exists' };

		addClass(element, 'new-class');
		console.log(element.className);

		const classes = element.className.split(' ');
		console.log(element.className.split(' '));

		assert.equal(classes[1], 'new-class');
	});

	it('TODO: Add more tests later on...');
});
