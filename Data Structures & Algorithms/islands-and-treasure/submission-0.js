class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROW = grid.length;
        const COL = grid[0].length;
        const queue = [];
        for(let i =0;i<ROW;i++) {
            for(let j = 0;j<COL;j++) {
                if(grid[i][j] === 0) {
                    queue.push([i, j, 0]);
                } 
            }
        }

        while(queue.length>0) {
            const [i, j, level] = queue.shift();
            if(i<0 || j<0 || i>(ROW-1) || j>(COL-1)) {
                continue;
            }
            if(grid[i][j] === -1) {
                continue;
            }
            if(grid[i][j] ===2147483647 ||grid[i][j] ===0){
                if(grid[i][j] === 2147483647 ) {
                    grid[i][j] = level;
                }
                queue.push([i-1, j, level+1])
                queue.push([i+1, j, level+1])
                queue.push([i, j+1, level+1])
                queue.push([i, j-1, level+1])
            }
        }
        return grid;
    }
}
