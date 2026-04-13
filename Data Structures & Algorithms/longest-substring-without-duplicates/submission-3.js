class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let start = 0;
        let end = 0;
        let maxCount = 0;
        let currCount = 0;
        let count = {}
        while(start<=end && end< s.length) {
            if(count[s[end]] === 1) {
                start = start+1;
                end = start;
                count = {};
                currCount = 0;
            } else {
                count[s[end]] = 1;
                end++;
                currCount++;
                maxCount = Math.max(currCount, maxCount);
            }
        }
        return maxCount
    }
}
