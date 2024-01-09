
var checkStraightLine = function(coordinates) {
    
    if (coordinates.length <= 2) {
        return true; // Two points always form a straight line
    }

    const calculateSlope = (point1, point2) => (point2[1] - point1[1]) / (point2[0] - point1[0]);

    const slope = calculateSlope(coordinates[0], coordinates[1]);

    for (let i = 2; i < coordinates.length; i++) {
        const currentSlope = calculateSlope(coordinates[i - 1], coordinates[i]);

        // If the current slope is not equal to the initial slope, points do not form a straight line
        if (currentSlope !== slope) {
            return false;
        }
    }

    // If the loop completes, all slopes are consistent, and points form a straight line
    return true;
}

// Example usage:
const coordinates1 = [[1,2],[2,3],[3,4],[4,5],[5,6]];
console.log(checkStraightLine(coordinates1)); // Output: true