class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        const end = s.length-1;
        let length = 0
        for(let i = end;i>=0;i--) {
            if(s[i] === ' ' && length != 0) {
                break;
            }
            if(s[i]!=' ') {
                length++;
            }
        }
        return length;
    }
}
