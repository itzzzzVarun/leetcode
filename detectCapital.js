var detectCapitalUse = function(word) {
    if (word === word.toUpperCase()) {
        return true
    }
    if (word === word.toLowerCase()) {
        return true
    }
    if (/[A-Z]/.test(word.charAt(0))) {
        let nStr = word.slice(1)
        if (nStr === nStr.toLowerCase()) {
            return true
        }
    }
    return false
    
};

detectCapitalUse("AKKKA")