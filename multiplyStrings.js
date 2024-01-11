/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const len1 = num1.length;
    const len2 = num2.length;
    const resultArray = new Array(len1 + len2).fill(0);

    for (let i = len2 - 1; i >= 0; i--) {
        const digit2 = parseInt(num2[i], 10);

        for (let j = len1 - 1; j >= 0; j--) {
            const digit1 = parseInt(num1[j], 10);

            const product = digit1 * digit2 + resultArray[i + j + 1];

            resultArray[i + j + 1] = product % 10;
            resultArray[i + j] += Math.floor(product / 10);
        }
    }

    // Remove leading zeros from the result
    const result = resultArray.join('').replace(/^0+/, '');

    return result === '' ? '0' : result;
}

// Example usage:
const num1 = "2";
const num2 = "3";
console.log(multiply(num1, num2)); // Output:"6"
