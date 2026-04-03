class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */

    constructor(){
        this.max = 0;
        this.ROW = 0;
        this.COL = 0;
    }
    dfs(grid, locX, locY, area) {
        if(locX>this.ROW || locY>this.COL || locX<0 || locY<0) {
            return;
        }
        if(grid[locX][locY] === 0){
            return;
        }
        grid[locX][locY] = 0;
        area.val+=1;
        this.dfs(grid, locX-1, locY, area);
        this.dfs(grid, locX+1, locY, area);
        this.dfs(grid, locX, locY-1, area);
        this.dfs(grid, locX, locY+1, area);        
    }
    maxAreaOfIsland(grid) {
        this.ROW = grid.length-1;
        this.COL = grid[0].length-1;

        for(let i = 0;i<=this.ROW;i++) {
            for(let j = 0;j<=this.COL;j++) {
                if(grid[i][j] === 1) {
                    const islandArea = {val:0}
                    this.dfs(grid, i, j, islandArea);
                    this.max = Math.max(this.max, islandArea.val);
                }
            }
        }
        return this.max;
    }
}
