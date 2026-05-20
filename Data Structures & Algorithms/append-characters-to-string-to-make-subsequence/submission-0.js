class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let start = 0;
        for(let i = 0; i<s.length;i++) {
            if(t[start] === s[i]) {
                start++;
            }
            if(start === t.length) {
                break;
            }
        }
        return t.length - start;
    }
}
