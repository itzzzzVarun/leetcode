/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums,val) {
    let k = 0
    for (let i in nums) {
        if (nums[i] == val) {
            nums[i] = '_'
        } else {
            k++
        }
    }
    let j = 0
    for (let i = 0; i<nums.length; i++) {
        let mybool = false
        let key = nums[i]
        if(nums[i] !== '_') {
            if (i !== j) {
                mybool = true
            }
            nums[j] = nums[i]
            j++
        }
        if (mybool) {
            nums[i] = '_'
        }
    }
    
    return k
};

removeElement([0,1,2,2,3,0,4,2],2)