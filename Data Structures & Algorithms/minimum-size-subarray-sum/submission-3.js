class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let start = 0;
        let end = 0;
        let minLength = Infinity;
        let sum = 0;
        while(start<=end && end<nums.length) {
            sum += nums[end];
            if(sum>=target) {
                while(sum>=target) {
                    minLength = Math.min(end-start+1, minLength)
                    sum-=nums[start];
                    start++;
                }
            }
            end++;
        }
        return minLength ===Infinity ? 0: minLength
    }
}
