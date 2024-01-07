/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    
    if(low%2 === 0){
        low++;
    }
    
    let count = 0;
    for(let i = low; i <=high; i += 2){
        count++;
    }
    return count;
};
const low = 3;
const high = 7;
const count = countOdds(low,high);
console.log(count);