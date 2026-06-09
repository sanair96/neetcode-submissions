class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */

    stringToHash(s) {
        const sHash = s.split("").reduce((acc, curr) => {
            acc[curr.charCodeAt(0)-97] = (acc[curr.charCodeAt(0)-97]||0)+1;
            return acc;
        },new Array(26).fill(0)).join();
        return sHash
    }

    checkInclusion(s1, s2) {
        const lengthS1 = s1.length;
        const lengthS2 = s2.length;

        const s1Hash = this.stringToHash(s1);
        for(let i = 0;i<lengthS2-lengthS1+1;i++) {
            const slicedString = s2.slice(i, i+lengthS1);
            const hashed = this.stringToHash(slicedString);
            if(s1Hash === hashed) {
                return true;
            }
        }
        return false
    }
}
