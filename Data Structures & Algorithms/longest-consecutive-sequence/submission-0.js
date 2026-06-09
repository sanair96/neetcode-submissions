class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       const numsHash = nums.reduce((acc, curr)=> {
            acc[curr] = [];
            return acc
       },{});

       const startNums = nums.reduce((acc, curr) => {
            if(!numsHash[curr-1]) {
                acc.push(curr);
            }
            return acc;
       },[]);

       let maxSize = 0;
        for(let i=0;i<startNums.length;i++) {
            let length = 1;

            while(numsHash[startNums[i]+length]) {
                length++;
            }
            maxSize = Math.max(maxSize, length)
        }
        return maxSize;

    }
}
