class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const distance = Array.from({length: word1.length+1}, ()=> new Array(word2.length+1).fill(0));
        for(let i=0;i<=word1.length;i++) {
            distance[i][0] = i;
        }
        for(let j=0;j<=word2.length;j++) {
            distance[0][j] = j;
        }
        for(let i=1;i<=word1.length;i++) {
            for(let j=1;j<=word2.length;j++) {
                if(word1[i-1] === word2[j-1]) {
                    distance[i][j] = distance[i-1][j-1];
                } else {
                    distance[i][j] = Math.min(distance[i-1][j], distance[i-1][j-1], distance[i][j-1]) + 1;
                }
            }
        }
        return distance[word1.length][word2.length]
    }
}
