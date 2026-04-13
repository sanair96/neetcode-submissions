class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = 0;
        let maxF = 0;
        let start =0, end = 0;
        let char = new Map();
        while(start<=end && end < s.length) {
            const curr = (char.get(s[end])||0)+1
            char.set(s[end],curr)
            maxF = Math.max(maxF, char.get(s[end]));
            while(end-start+1-maxF>k) {
                char.set(s[start], char.get(s[start])-1);
                start++;
            }
            count = Math.max(count, end-start+1)
            end++;
        }
        return count;
    }
}
