/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    let result;
    let xString = x.toString()
    if (xString.length === 1) {
        return true
    }
    let left = 0
    let right = xString.length - 1
    while (left < right) {
        if (xString[left] === xString[right]) {
            result = true
            left++
            right--
        }
        if (xString[left] !== xString[right]) {
            result = false
            break;
        }
    }
    return result

};

isPalindrome(121)