// http://mochajs.org/

const assert = require('assert'),
	mocha = require('mocha'),
	code = require('../library/module/code');

mocha.describe('Code', () => {
	mocha.it('Get Data', () => {
		return code.get().then((response) => {
			assert(response, 'Data Found.');
		});
	});
});
