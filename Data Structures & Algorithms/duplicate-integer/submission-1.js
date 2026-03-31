class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seenNum = {};
        const length = nums.length;
        let hasDuplicate = false;
        for(let i =0; i<length; i++) {
            if(seenNum[nums[i]]) {
                console.log('seen')
                hasDuplicate = true;
                break;
            }
            seenNum[nums[i]] = true;
        }
        return hasDuplicate;
    }
}
