
var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    let zeroRows = new Set();
    let zeroCols = new Set();

    // Mark the rows and columns that contain 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                zeroRows.add(i);
                zeroCols.add(j);
            }
        }
    }

    // Set entire rows to 0
    zeroRows.forEach(row => {
        for (let j = 0; j < n; j++) {
            matrix[row][j] = 0;
        }
    });

    // Set entire columns to 0
    zeroCols.forEach(col => {
        for (let i = 0; i < m; i++) {
            matrix[i][col] = 0;
        }
    });
}

// Example usage:
const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];

setZeroes(matrix);

console.log(matrix);