const assert = chai.assert;

describe('Array', () => {
	it('should start empty', () => {
		const arr = [];

		assert.equal(arr.length, 0, 'Array length was not 0');
	});
});
