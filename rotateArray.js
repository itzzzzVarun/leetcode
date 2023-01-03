function reverseArr(arr, left, right) {
    while (left < right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

var rotate = function(nums, k) {
    if (nums.length === 1) {
        return nums
    }
    if (nums.length < k) {
        k = k%nums.length
    }
    reverseArr(nums,0,nums.length - 1)
    reverseArr(nums,0,k-1)
    reverseArr(nums,k,nums.length - 1)
    
    return nums
}

rotate([1,2,3],4)