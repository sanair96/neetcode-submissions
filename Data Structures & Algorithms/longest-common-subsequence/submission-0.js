class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const lcsb =  Array.from({length: text1.length+1}, () => new Array(text2.length+1).fill(0))

        for(let i=1;i<=text1.length;i++) {
            for(let j =1; j<=text2.length;j++) {
                if(text1[i-1]===text2[j-1]) {
                    lcsb[i][j] = lcsb[i-1][j-1]+1;
                }
                else {
                    lcsb[i][j] = Math.max(lcsb[i-1][j], lcsb[i][j-1])
                }
            }
        }
        return lcsb[text1.length][text2.length]
    }
}
