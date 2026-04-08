class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const subsets = new Set();
        const sortedCand = candidates.sort((a,b) => a-b)
        const findCand = (subs, remaining, currSub, i) => {
            if(remaining === 0) {
                subs.add(JSON.stringify([...currSub]));
                return;
            }

            if(i>=sortedCand.length || remaining<0) {
                return;
            }
            currSub.push(sortedCand[i]);
            findCand(subs, remaining - sortedCand[i], currSub, i+1);
            currSub.pop();
            while(i+1<sortedCand.length && sortedCand[i] === sortedCand[i+1]) {
                i++;
            }
            findCand(subs, remaining, currSub, i+1);
        }
        findCand(subsets, target,[],0)
        return Array.from(subsets, (subset) => JSON.parse(subset));
    }
}
