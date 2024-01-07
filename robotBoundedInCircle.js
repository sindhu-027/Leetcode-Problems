var isRobotBounded = function(instructions) {
    // Initial position and direction
    let x = 0;
    let y = 0;
    let direction = 'N'; // 'N' for north, 'S' for south, 'E' for east, 'W' for west
    
    // Helper function to update direction based on current direction and turn instruction
    function turn(currentDirection, turnInstruction) {
        if (turnInstruction === 'L') {
            return currentDirection === 'N' ? 'W' : 
                   currentDirection === 'W' ? 'S' : 
                   currentDirection === 'S' ? 'E' : 'N';
        } else {
            return currentDirection === 'N' ? 'E' : 
                   currentDirection === 'E' ? 'S' : 
                   currentDirection === 'S' ? 'W' : 'N';
        }
    }
    
    // Process each instruction
    for (let instruction of instructions) {
        if (instruction === 'G') {
            // Move one unit in the current direction
            if (direction === 'N') y++;
            else if (direction === 'S') y--;
            else if (direction === 'E') x++;
            else x--;
        } else {
            // Turn 90 degrees based on the instruction
            direction = turn(direction, instruction);
        }
    }
    
    // Check if the robot returns to the initial position or faces north
    return (x === 0 && y === 0) || direction !== 'N';
}

// Example usage:
const instructions = "GGLLGG";
console.log(isRobotBounded(instructions)); // Output: true