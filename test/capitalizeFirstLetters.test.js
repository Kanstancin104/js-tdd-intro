// test/capitalizeFirstLetters.test.js
const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

// give the test suite a label using describe
describe('capitalizeFirstLetters', () => {
    // give the test a label using it
    it('is a function accepting one argument', () => {
        assert.strictEqual(typeof capitalizeFirstLetters, 'function');
        assert.strictEqual(capitalizeFirstLetters.length, 1);
    });

    it('transforms coding correctly', () => {
        assert.strictEqual(capitalizeFirstLetters('coding'), 'Coding');
    });

    it('works with a 1-character string', () => {
        assert.strictEqual(capitalizeFirstLetters('x'), 'X');
    });

    it('works with an empty string', () => {
        assert.strictEqual(capitalizeFirstLetters(''), '');
    })

    it('works with a string of several words', () => {
        assert.strictEqual(capitalizeFirstLetters('i love programming'), 'I Love Programming');
    })

    it('let initial capital letter remain capital', () => {
        assert.strictEqual(capitalizeFirstLetters('Y'), 'Y');
    })
})
