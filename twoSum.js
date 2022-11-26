/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let sum  = 0
    let i
    let j
    for (i = 0; i<nums.length; i++) {
        for (j = i+1; j<nums.length; j++) {
            sum = nums[i] + nums[j]
            if (sum === target) {
                return [i,j]
            }
        }
    }
}
let nums = [3,3]
let target = 6
twoSum(nums, target)