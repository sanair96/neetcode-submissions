class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let start = 0;
        for(let i = 0;i<t.length;i++) {
            if(s[start] === t[i]) {
                start++;
            }
            if(start === s.length) {
                break;
            }
        }
        if(start === s.length) {
            return true
        }
        return false

    }
}
