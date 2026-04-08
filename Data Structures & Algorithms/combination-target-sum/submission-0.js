class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const subsets = [];
        const findSubs = (subsets, i, currSub, remaining) => {
            if(i>= nums.length || remaining<0) {
                return;
            }
            if(remaining===0) {
                subsets.push([...currSub]);
                return; 
            }
            currSub.push(nums[i]);
            findSubs(subsets, i, currSub, remaining-nums[i]);
            currSub.pop(nums[i]);
            findSubs(subsets, i+1, currSub, remaining);
        }
        findSubs(subsets, 0, [], target);
        return subsets;
    }
}
