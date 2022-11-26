/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let resultArr = [] 
    let AUX1 = 1
    let AUX2 = 0
    let left = 0
    let right = nums.length - 1
    let mid = 0
    while (left<=right) {
        mid = Math.floor((left + right)/2)
        if (nums[mid] == target && AUX1 == 1 && nums[mid - 1] != target) {
            AUX1 = 0
            AUX2 = 1
            left = mid
            right = nums.length - 1
            resultArr.push(mid)
            mid = right
        }
        if (nums[mid] == target && AUX2 == 1 && nums[mid + 1] != target) {
            AUX2 = 0
            left = mid + 1
            right = 0
             resultArr.push(mid)
        }
        
        if (AUX1 == 1) {
            if (nums[mid] < target)
                left  = mid + 1
            else
                right = mid - 1
        }
        if (AUX2 == 1) {
            if (nums[mid] > target) 
                right = mid - 1
            else 
                left = mid + 1
        } 
        
    }
     return (resultArr.length)? resultArr : [-1,-1]
 };