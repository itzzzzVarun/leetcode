var countAndSay = function(n) {
    
    if (n == 1)
        return "1";
    
    var prev = countAndSay(n-1);
    
    var s = "";
    var lastChar = "";
    var curNbChars = 0;
    for (var i = 0 ; i < prev.length ; i++) {
        if (prev[i] == lastChar) {
            curNbChars++;
        } else {
            if (curNbChars)
                s += curNbChars + lastChar;
            lastChar = prev[i];
            curNbChars = 1;
        }
    }
    if (curNbChars) {
        s += curNbChars + lastChar;        
    }
    
    return s;
};