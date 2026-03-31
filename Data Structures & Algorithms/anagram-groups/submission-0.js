class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramList = {};
        for(let i = 0; i< strs.length; i++) {
            const letterCount = Array(26).fill(0)
            const currWord = strs[i]

            currWord.split("").reduce((acc, letter) => {
                const index = letter.charCodeAt(0) - 'a'.charCodeAt(0);
                acc[index]+=1;
                return acc;
            },letterCount)
            letterCount.join("")
            if(letterCount in anagramList) {
                anagramList[letterCount] = [...anagramList[letterCount], currWord];
            } else {
                anagramList[letterCount] = [currWord];
            }
        }
        return Object.values(anagramList)
    }
}
