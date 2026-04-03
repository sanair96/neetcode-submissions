/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 * 
 * 
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        const checked = [];

        const sorted = intervals.sort((a,b)=> a.start-b.start);
        for(let i=0;i<sorted.length;i++) {
            if(checked.length === 0) {
                checked.push(sorted[i]);
            } else {
                const current = sorted[i];
                const lastInterval = checked[checked.length-1];
                if(current.start<lastInterval.end || current.end<lastInterval.end) {
                    return false;
                }
                checked.push(current)
            }
        }
        return true
    }
}
