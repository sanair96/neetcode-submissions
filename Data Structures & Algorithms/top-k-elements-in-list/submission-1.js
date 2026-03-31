class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();

        for(let i = 0; i < nums.length; i++) {
            freq.set(nums[i], (freq.get(nums[i])||0)+1);
        }
        const buckets = Array.from({length: nums.length+1}, () => [] )
        for(let [num, frequency] of freq.entries()) {
            buckets[frequency].push(num)
        }
        const results = [];
        for(let i = buckets.length-1; results.length < k ; i--) {
            if(buckets[i].length>0)
                results.push(...buckets[i])
        }
        return results
    }
}
