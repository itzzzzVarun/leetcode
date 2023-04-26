/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num<10) return num
    let first = Math.floor(num / 10)
    let second = num % 10
    let res = first + second
    return addDigits(res)
};
// @lc code=end

