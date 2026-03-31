class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let solution = [];
        const remainder = {};
        for(let i = 0; i<nums.length;i++) {
            const diff = target - nums[i];
            if(diff in remainder) {
                solution.push(remainder[diff]);
                solution.push(i);
                break;
            }
            remainder[nums[i]] = i;
        }
        return solution
    }
}
