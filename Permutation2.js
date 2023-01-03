var permuteUnique = function(nums) {
    let resultArr = []
    let frq = {}
    let visited = Array(nums.length).fill(false)
    backtrack(resultArr, nums, [],frq, visited)
    return resultArr
};

var backtrack = (resultArr, nums, curr, frq, visited) => {
    if (curr.length === nums.length) {
        let currString = curr.toString().split(',').join('');
        if (currString in frq) {
            frq[currString] = frq[currString] + 1 
        } else { 
            frq[currString] = 1
            resultArr.push(Array.from(curr))
        }
        return 
    }
    for (let i = 0; i<nums.length; i++) {
        if (visited[i] === true) continue
        curr.push(nums[i])
        visited[i] = true
        backtrack(resultArr, nums, curr, frq, visited)
        curr.pop()
        visited[i] = false
    }
}

permuteUnique([1,1,2])