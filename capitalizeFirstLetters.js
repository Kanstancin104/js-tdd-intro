// capitalizeFirstLetters.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE
function capitalizeFirstLetters(input) {
    let words = input.split(" ");
    if (input===""){
        return input;
    }
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
}

// Check that capitalizeFirstLetters transforms a string with several words correctly
assert.strictEqual(capitalizeFirstLetters('i love programming'), 'I Love Programming');

// Check that it works for a 1-word string
assert.strictEqual(capitalizeFirstLetters('coding'), 'Coding');

// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('x'), 'X');

// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');

// Check that initial capital letter remains capital
assert.strictEqual(capitalizeFirstLetters('Y'), 'Y');