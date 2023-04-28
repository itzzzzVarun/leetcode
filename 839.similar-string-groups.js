/*
 * @lc app=leetcode id=839 lang=javascript
 *
 * [839] Similar String Groups
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {
    let grps = 0;
    let visited = new Array(strs.length).fill(false)
    for (let i=0; i<strs.length; i++) {
        if(visited[i]) continue
        grps++
        dfs(i, strs, visited)
    }
    return grps
};

var dfs = function(i, strs, visited) {
    visited[i] = true
    for (let j = 0; j<strs.length; j++) {
        if (visited[j]) continue;
        if (isSimiler(strs[i], strs[j])) {
            dfs(j, strs, visited)
        }
    }
}

var isSimiler = function(str1, str2) {
    let count = 0
    for (let i = 0; i<str1.length; i++) {
        if (str1[i] !== str2[i]) {
            count++
        }
    }
    return (count === 2 || count === 0)
}
// @lc code=end

