class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let longestString = -1;

        let maxF = 0;
        let l = 0, r = 0;
        let freq = {};
        for(let r = 0;r<s.length;r++) {
            freq[s[r]] = (freq[s[r]]+1 || 1);
            maxF = Math.max(freq[s[r]], maxF);

            while((r-l)-maxF+1>k) {
                freq[s[l]]--;
                l++;
            }
            longestString = Math.max(longestString, r-l+1)
        }
        return longestString
    }
}
