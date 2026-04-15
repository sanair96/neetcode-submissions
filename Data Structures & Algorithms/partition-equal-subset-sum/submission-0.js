class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const totalSum = nums.reduce((acc, curr) => {
            return acc+curr
        },0)

        if(totalSum %2 !=0) {
            return false;
        }
        const dp = Array.from({length: nums.length+1}, () => new Array((totalSum/2)+1).fill(null));
        for(let i =0;i<nums;i++) {
            dp[i][0] = true;
        }
        dp[0][nums[0]] = true;
        return this.search(dp, 0, totalSum/2, nums)
    }

    search(dp, i, target, nums) {
        if(target === 0) {
            return true;
        }
        if(target <0 || i >= dp.length) {
            return false;
        }
        if(dp[i][target]!=null) {
            return dp[i][target]
        }

        dp[i][target] = this.search(dp, i+1, target, nums) || this.search(dp, i+1, target-nums[i], nums)

        return dp[i][target]
    }
}
