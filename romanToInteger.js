/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const roman = {
        'I':         1,
        'V':         5,
        'X':         10,
        'L':         50,
        'C':         100,
        'D':         500,
        'M':         1000
        }; 
    
    let result = 0
    
    for (let value = 0; value < s.length; value++) {
        if (s[value] in roman) {
            const cur = roman[s[value]];
            const next = roman[s[value+1]];
                if(cur < next) {
                    result += next - cur
                    value++
                } else {
                    result += cur
                }
            } else {
                return { result: "This is not a valid input" }
            }
        }
   return result
};

romanToInt("MCMXCIV")