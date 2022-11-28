/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let mix = Array(nums1.length + nums2.length)
    let i = 0
    let j = 0
    let k = 0

    while(i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            mix[k] = nums1[i]
            i++
        } else {
            mix[k] = nums2[j]
            j++
        }
        k++
    }

    while (i < nums1.length) {
        mix[k] = nums1[i]
        i++
        k++
    }
    while (j < nums2.length) {
        mix[k] = nums2[j]
        j++
        k++
    }
    let low = 0
    let high = mix.length - 1
    let mid = Math.floor((low + high)/2)
    if (!(mix.length%2 == 0)) {
        return (mix[mid]).toFixed(5)
    } else {
        let a = mix[mid]
        let b = mix[mid  + 1]
        return ((a+b)/2).toFixed(5)
        
    }
};