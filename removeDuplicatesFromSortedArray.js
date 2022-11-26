/**
 * @param {number[]} nums
 * @return {number}
 */

 var removeDuplicates = function(nums) {
    let left = 0
    let right = 1
    let newArr = []
    let numsLength = nums.length
   while (right <= nums.length) {
       if (nums[left] === nums[right]) {
            right++
       } else {
           newArr.push(nums[left])
           left = right
           right++
       }
   }
   
   for (let i = 0; i<numsLength; i++) {
       if (i < newArr.length) {
            nums[i] = newArr[i]
       }
       
       if (i >= newArr.length) {
           nums.pop()
       }
   }
   return nums.length
};

removeDuplicates([1,1,2])