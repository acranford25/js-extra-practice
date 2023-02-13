// Last Character
// Define a function lastCharacter that accepts two strings as arguments.
// lastCharacter should return true if both strings end with the same character.
// Otherwise, lastCharacter should return false.

// Example:
// lastCharacter('apples', 'pumpkins'); // => true
// lastCharacter('marker', 'pen'); // => false

// YOUR CODE BELOW
function lastCharacter(string1, string2) {
    let newString1 = "";
    let newString2 = "";
    for (i = string1.length - 1; i >= 0; i--) {
        newString1 += string1[i];
    for (i = string2.length - 1; i >= 0; i--) {
        newString2 += string2[i];
    }
    if (newString1[0] === newString2[0]) {
        return true;
    }
    else {
        return false;
    }
    }
}


// Do not change the code below
module.exports = { lastCharacter };
