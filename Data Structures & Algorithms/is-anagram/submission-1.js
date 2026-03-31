class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sLetterCount = {}
        const tLetterCount = {}

        const sLength = s.length;
        const tLength = t.length;
        if(sLength != tLength) {
            return false;
        }
        const sSet = new Set([...s]);
        const tSet = new Set([...t]);

        const difference = sSet.difference(tSet)
        if (difference.size !=0) {
            return false;
        }

        for(let i=0;i<s.length;i++) {
            const sLetter = s[i];
            const tLetter = t[i];
            if(sLetter in sLetterCount) {
                sLetterCount[sLetter]+=1;
            } else {
                sLetterCount[sLetter] = 1
            }
            if(tLetter in tLetterCount) {
                tLetterCount[tLetter]+=1
            } else {
                tLetterCount[tLetter] = 1
            }
        }
        console.log(sLetterCount, tLetterCount)

        return Object.entries(sLetterCount).reduce((acc, [key, value]) => {
            return acc && tLetterCount[key] === value
        }, true)
    }
}
