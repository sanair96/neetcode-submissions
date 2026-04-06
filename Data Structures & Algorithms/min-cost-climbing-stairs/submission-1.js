class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const prev = {};
        const minCost = (i) => {
            if(i>cost.length-1) {
                return 0;
            }

            if(prev[i]){
                return prev[i];
            }
            prev[i] = cost[i]+Math.min(minCost(i+1), minCost(i+2));
            return prev[i]
        }
        return Math.min(minCost(0), minCost(1))
    }
}
