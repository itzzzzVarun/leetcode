var hasPathSum = function(root, sum) {
    return helper(root, 0, sum);
};

var helper = function(root, curSum, sum) {
    if (!root) { return false; }
    if (root.left === null && root.right === null) {
        curSum += root.val;
        return curSum === sum;
    }
    
    return helper(root.left, curSum + root.val, sum) || helper(root.right, curSum + root.val, sum);
};