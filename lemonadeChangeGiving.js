function lemonadeChange(bills) {
    // Initialize change available for $5, $10, and $20 bills
    const changeAvailable = { 5: 0, 10: 0, 20: 0 };

    for (let i = 0; i < bills.length; i++) {
        const bill = bills[i];
        if (bill === 5) {
            // Customer pays with $5, no change needed
            changeAvailable[5]++;
        } else if (bill === 10) {
            // Customer pays with $10, need to give $5 change
            if (changeAvailable[5] > 0) {
                changeAvailable[5]--;
                changeAvailable[10]++;
            } else {
                return false;
            }
        } else if (bill === 20) {
            // Customer pays with $20
            if (changeAvailable[10] > 0 && changeAvailable[5] > 0) {
                // Give $10 + $5 change
                changeAvailable[10]--;
                changeAvailable[5]--;
                changeAvailable[20]++;
            } else if (changeAvailable[5] >= 3) {
                // Give three $5 bills as change
                changeAvailable[5] -= 3;
                changeAvailable[20]++;
            } else {
                return false;
            }
        }
    }

    // If the loop completes, all customers received correct change
    return true;
}

// Example usage:
const bills = [5, 5, 5, 10, 20];
const result = lemonadeChange(bills);
console.log(result);  // Output: true
