class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefixProd = [1];
        const suffixProd = []
        suffixProd[nums.length-1] = 1;
        for(let i = 1; i<nums.length;i++) {
            prefixProd[i] = prefixProd[i-1]* nums[i-1];
            suffixProd[nums.length-1-i] = suffixProd[nums.length-i] * nums[nums.length-i];
        }
        const prod = []
        for(let i = 0;i<nums.length;i++) {
            prod.push(prefixProd[i] * suffixProd[i])
        }
        return prod
    }
}
