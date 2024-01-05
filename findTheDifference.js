/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let result = ''

    for(let i =0; i<s.length;i++){
        result ^= s.charCodeAt(i);
    }
    for(let i=0; i<t.length; i++){
        result ^= t.charCodeAt(i)
    }
    return  String.fromCharCode(result);
};

const s ="abcd"
const t ="abcde"
const addedLetter = findTheDifference(s,t)
console.log(addedLetter)