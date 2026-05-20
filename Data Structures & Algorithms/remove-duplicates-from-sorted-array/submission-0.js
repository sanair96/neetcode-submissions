class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let k = 0;
        let write = 1;
        for(let i = 1;i<nums.length;i++) {
            if(nums[i]!==nums[write-1]) {
                nums[write++] = nums[i];
                k++;
            }
        }
        return k+1;
    }
}
