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

module.exports = capitalizeFirstLetters;