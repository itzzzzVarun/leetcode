var myAtoi = function(s) {
    
    let i = 0
    while (i<s.length && s[i] === ' ') {
        i++
    }
    if (i>=s.length) {
        return 0
    }
    let sign = 1;
    if (s[i] === '+' || s[i] === '-') {
        sign = (s[i] == '+')?+1:-1;
        i++
    }
    if (i>=s.length) {
        return 0
    }
    let num = 0
    for (let j = i; (j<s.length) && (s[i] >= '0') && (s[i] <= '9'); j++) {
        num = num * 10 + parseInt(s[i])
        i++
    }
    
    if (num*sign <= -2147483648 || num*sign >= 2147483647) {
       return (num*sign >= 2147483647)?2147483647:-2147483648;
    }
    return  num*sign
    };
    
    myAtoi("-91283472332")