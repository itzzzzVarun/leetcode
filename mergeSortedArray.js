var merge = function(nums1, m, nums2, n) {
    let newArr = []
    let i = 0
    let j = 0
    let k = 0
    while(i<m && j<n) {
        if (nums1[i] < nums2[j] ) {
            newArr[k] = nums1[i]
            i++
            k++
        } else {
            newArr[k] = nums2[j]
            j++
            k++
        }
    }
    while (i<m) {
        newArr[k] = nums1[i]
        i++
        k++
    }
    while (j<n) {
        newArr[k] = nums2[j]
        j++
        k++
    }
    for (let val = 0; val<newArr.length; val++) {
        nums1[val] = newArr[val]
    }
    return nums1
};
merge([1,2,3,0,0,0],3,[2,5,6],3)