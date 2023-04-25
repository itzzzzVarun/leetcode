/*
 * @lc app=leetcode id=2336 lang=javascript
 *
 * [2336] Smallest Number in Infinite Set
 */

// @lc code=start

var SmallestInfiniteSet = function() {
    this.s = new Set()
    for (let i=1; i<=1000; i++) {
        this.s.add(i)
    }
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    let min = Math.min(...[...this.s]);
    this.s.delete(min)
    return min
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    this.s.add(num)
    return;
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
// @lc code=end

