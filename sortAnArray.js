var merge = function(first, second) {
    let mix = []
    let i = 0
    let j = 0
    let k = 0
    while (i < first.length && j < second.length) {
        if (first[i] < second[j]) {
            mix[k] = first[i]
            i++
            k++
        } else {
            mix[k] = second[j]
            j++
            k++
        }
    }
    while (i< first.length) {
        mix[k] = first[i]
        i++
        k++
    }
    while (j< second.length) {
        mix[k] = second[j]
        j++
        k++
    }
    return mix
    
}

var sortArray = function(nums) {
    if (nums.length === 1) {
        return nums
    }
    let mid = Math.floor(nums.length/2)
    let left = sortArray(nums.slice(0,mid))
    let right = sortArray(nums.slice(mid))
    return merge(left, right)
};
sortArray([5,4,3,2,1])