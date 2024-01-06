/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    const cleanstr1 = s.replaceAll(/[^\w]/g,'').toLowerCase();
    const cleanstr2 = t.replaceAll(/[^\w]/g,'').toLowerCase();

    return cleanstr1.split('').sort().join('') === cleanstr2.split('').sort().join('')
    
};

const s = "anagram"
const t = "nagaram"
const result = isAnagram(s,t)
console.log(result)