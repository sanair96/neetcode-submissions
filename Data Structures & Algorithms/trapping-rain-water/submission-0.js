class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if(height.length === 0) {
            return 0;
        }
        let start = 0;
        let end = height.length-1;
        let waterHeld = 0;
        let leftMax = height[0];
        let rightMax = height[height.length-1];
        while(start<end) {
            if(leftMax<rightMax) {
                start++;
                leftMax = Math.max(leftMax, height[start]);
                waterHeld += leftMax - height[start];
            }
            else {
                end--;
                rightMax = Math.max(rightMax, height[end]);
                waterHeld+= rightMax-height[end];
            }
        }

        return waterHeld

    }
}
