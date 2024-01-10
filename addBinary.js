
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = '';
    let carry = 0;

    // Make both binary strings of equal length by padding with zeros if necessary
    const maxLength = Math.max(a.length, b.length);
    a = a.padStart(maxLength, '0');
    b = b.padStart(maxLength, '0');

    // Perform binary addition
    for (let i = maxLength - 1; i >= 0; i--) {
        const bitA = parseInt(a[i], 10);
        const bitB = parseInt(b[i], 10);

        const sum = bitA + bitB + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }

    // If there is a carry after the loop, add it to the result
    if (carry > 0) {
        result = carry + result;
    }

    return result;
}

// Example usage:
const a = "11";
const b = "1";
console.log(addBinary(a, b)); // Output: "100"