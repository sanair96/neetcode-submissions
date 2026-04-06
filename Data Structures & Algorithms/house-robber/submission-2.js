class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const robbed = {};

        const rob = (i) => {
            if(i>=nums.length) {
                return 0;
            }

            if(robbed[i]) {
                return robbed[i];
            }

            robbed[i] = nums[i] + Math.max(rob(i+2), rob(i+3));

            return robbed[i];
        }

        return Math.max(rob(0), rob(1));
    }
}
