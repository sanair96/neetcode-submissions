class Solution {

    sub(subset, i, actual, res) {
        if(i>=actual.length) {
            res.push([...subset]);
            return;
        }
        this.sub(subset, i+1, actual, res)
        subset.push(actual[i]);
        this.sub(subset, i+1, actual, res);
        subset.pop();
        
    }
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = []
        const subset = []
        this.sub(subset, 0, nums, result)
        return result;
    }
}
