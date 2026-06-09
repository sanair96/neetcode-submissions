class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let lmax = 0, rmax = heights.length-1;
        let max = -Infinity;

        while(lmax<rmax) {
            let waterHeld = (Math.min(heights[lmax], heights[rmax]))*(rmax-lmax);
            max = Math.max(max, waterHeld);

            if(heights[lmax]<heights[rmax]) {
                lmax++;
            } else {
                rmax--;
            }
        }
        return max
    }
}
