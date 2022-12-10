/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {
    let low = 0
    let high = nums.length - 1
    let result
    while (low <= high) {
        let mid = Math.floor((low+high)/2)
        result = mid
        if (nums[mid] === target) {
            return mid
        }
        if (nums[mid] > target) {
            high = mid - 1
        }
        if (nums[mid] < target) {
            low = mid + 1
        }
    }
    console.log(result)
   if (result+1 >= nums.length) {
       if (target < nums[result]) {
           return result
       } else {
           return result + 1
       }
       return nums.length
   } 
   if (result-1 <= -1) {
       if (target < nums[result]) {
           return result
       } else {
           return result + 1
       }
   }
    if (target < nums[result] && target > nums[result-1]) {
        return result
    } else if(target > nums[result] && target < nums[result+1]) {
        return result + 1
    }
};

searchInsert([1],0)