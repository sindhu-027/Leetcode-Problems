
var mergeAlternately = function(word1, word2) {
    let mergedString = '';

    const maxLength = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < word1.length) {
            mergedString += word1[i];
        }
        if (i < word2.length) {
            mergedString += word2[i];
        }
    }

    return mergedString;
}

const word1 = "abc";
const word2 = "pqr";
const result = mergeAlternately(word1, word2);
console.log(result);