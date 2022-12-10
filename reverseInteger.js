/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let negativeFlag = false;
    if (x<0) {
        negativeFlag = true
        x = -1 * x
    }
    let rev_num = 0, curt_digit = 0
    while (x != 0) {
    curt_digit = x%10
    rev_num = (rev_num * 10) + curt_digit
    if (rev_num >= 2147483647 ||  rev_num <= -2147483648) return 0
    x = Math.floor(x/10)
    }
    return (negativeFlag == true ? -rev_num:rev_num)
};

reverse(-120)