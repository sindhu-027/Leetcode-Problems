/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) { 
    
    const len = s.length;
    
    for(let i=1; i<=len/2; i++ ){
         const substring = s.slice(0,i); 
         const numRepeats = len/i
         
    if(numRepeats === Math.floor(numRepeats)){
        
        const constructedString = substring.repeat(numRepeats)
        
        if(constructedString === s){
            return true
        }
       }
    }
    return false;
};

const s = "abab"
const result = repeatedSubstringPattern (s)
console.log(result)