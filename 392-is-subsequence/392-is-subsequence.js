/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length === 0) return true
    
    let sPoint = 0
    let tPoint = 0 
    
    while (sPoint < s.length && tPoint < t.length) {
        if (s[sPoint] === t[tPoint])
            sPoint++
            tPoint++
    }
    return sPoint === s.length 
    
};