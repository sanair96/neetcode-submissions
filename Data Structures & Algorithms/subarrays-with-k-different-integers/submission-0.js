class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraysWithKDistinct(nums, k) {
        const hash = {};
        let count = 0;
        let ns=0, fs = 0, end=0
        let subCount = 0
        while(fs<=end && end<nums.length) {
            if (!hash[nums[end]]) {
                hash[nums[end]] = 0;
                count++;
            }
            hash[nums[end]]++;

            while(count>k) {
                hash[nums[ns]]-=1;
                if(hash[nums[ns]] === 0) {
                    count--;
                }
                ns++;
                fs=ns;
            }

            while(hash[nums[ns]]>1) {
                hash[nums[ns]]--;
                ns++;
            }
           if(count===k) {
            subCount += (ns-fs+1);
           }
           end++;
        }
        return subCount;
    }
}
