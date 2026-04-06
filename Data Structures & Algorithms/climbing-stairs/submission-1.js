class Solution {
    constructor() {
        this.prev = {};
    }

    countComb(curr, k) {
        if(curr>k) {
            return 0;
        }
        if(curr === k) {
            return 1;
        }
        if(this.prev[curr]) {
            return this.prev[curr]
        }
        this.prev[curr] = this.countComb(curr + 1, k) + this.countComb(curr + 2, k)
        return this.prev[curr]
    }

    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        return this.countComb(0, n);
    }
}
