class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [];
        let max = -Infinity;

        for(let i =0;i<=heights.length;i++) {
            while(stack.length && ((i===heights.length) ||heights[stack[stack.length-1]] >= heights[i])) {
                const height = heights[stack.pop()];
                const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
                max = Math.max(max, height*width);
            }
            stack.push(i)
        }
        return max;

    }
}
