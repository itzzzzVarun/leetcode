var permute = function(nums) {
    let resultArr = []
    let visited = Array(nums.length).fill(false)
    backtrack(resultArr, nums,[], visited)
    return resultArr
};

var backtrack = (resultArr, nums, curr, visited) => {
    if (curr.length === nums.length) {
        resultArr.push(Array.from(curr))
        return 
    }
    for (let i = 0; i<nums.length; i++) {
        if (visited[i] === true) continue
        curr.push(nums[i])
        visited[i] = true
        backtrack(resultArr, nums, curr, visited)
        curr.pop()
        visited[i] = false
    }
}

permute([1,1,2])