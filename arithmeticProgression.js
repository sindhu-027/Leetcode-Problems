/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    
    arr.sort((a,b) => a-b)
    
    const commonDifference = arr[1]-arr[0]
     
    for (let i=2; i<arr.length; i++){
        if(arr[i]-arr[i-1] !== commonDifference){
            return false
        }
    }
    return true
};

const arr= [3,5,1]
const result = canMakeArithmeticProgression(arr)
console.log(result)