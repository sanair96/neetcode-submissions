class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        const merged = [];
        const sortedIntervals = intervals.sort((a,b) => a[0]-b[0]);
        for(let i=0;i<sortedIntervals.length;i++) {
            const mergeLen = merged.length;
            const lastEntry = merged[mergeLen-1];
            if(lastEntry && lastEntry[1] >= sortedIntervals[i][0]) {
                    lastEntry[1] = lastEntry[1]> sortedIntervals[i][1]? lastEntry[1]: sortedIntervals[i][1];
                    merged[mergeLen-1] = lastEntry;
                    continue;
            }
            merged.push(sortedIntervals[i]);
            
        }
        return merged
    }
}
