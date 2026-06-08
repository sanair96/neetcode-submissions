class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */

    minPathSum(grid) {
       const ROWS = grid.length;
       const COLS = grid[0].length;

       const dp = Array.from({length: ROWS+1}, () => new Array(COLS+1).fill(Infinity));
        
        dp[ROWS-1][COLS] = 0;
        for(let i = ROWS-1;i>=0;i--) {
            for(let j = COLS-1;j>=0;j--) {
                dp[i][j] = grid[i][j]+Math.min(dp[i+1][j], dp[i][j+1]);
            }
        }
        console.log(dp)
        return dp[0][0]
    }
}
