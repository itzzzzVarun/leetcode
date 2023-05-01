/*
 * @lc app=leetcode id=1491 lang=javascript
 *
 * [1491] Average Salary Excluding the Minimum and Maximum Salary
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let max = Math.max(...salary)
    let min = Math.min(...salary)
    let sum = 0
    let res = 0
    for (let s of salary) {
        if (s === max || s === min) {
            continue
        }
        sum = sum + s
    }
    res = sum/(salary.length-2)
    return res
};
// @lc code=end

