class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let lmax =0, rmax = heights.length-1;
        let maxWater = 0;
        while(lmax<rmax) {
            let water = Math.min(heights[lmax], heights[rmax]) * (rmax-lmax);
            maxWater = Math.max(water, maxWater);

            if(heights[lmax]<heights[rmax]) {
                lmax++;
            } else {
                rmax--;
            }
        }
        return maxWater
    }
}
