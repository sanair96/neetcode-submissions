class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let minProduct = [nums[0]];
        let maxProduct = [nums[0]];
        let max = nums[0];
        for(let i = 1;i<nums.length;i++) {
            minProduct[i] = Math.min(minProduct[i-1]*nums[i], maxProduct[i-1]*nums[i], nums[i])
            maxProduct[i] = Math.max(minProduct[i-1]*nums[i], maxProduct[i-1]*nums[i], nums[i])
            max = Math.max(maxProduct[i], max)
        }
        return max;
    }
}
