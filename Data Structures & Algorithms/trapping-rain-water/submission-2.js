class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(heights) {
        let rainwater = 0;
        let length = heights.length;
        
        if(heights.length === 0) {
            return 0;
        }

        let maxL = heights[0], maxR = heights[length-1], l = 0, r = length - 1;

        while(l<r) {
            if(maxL<maxR) {
                l++;
                maxL = Math.max(maxL, heights[l]);
                rainwater+= Math.abs(maxL-heights[l])
            } else {
                r--;
                maxR = Math.max(maxR, heights[r]);
                rainwater+= Math.abs(maxR-heights[r])
            }
        }


        return rainwater

    }
}
