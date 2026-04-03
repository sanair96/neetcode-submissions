class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    constructor() {
        this.count = 0;
    }

    dfs(grid, locX, locY) {
        if(locX>=grid.length || locX<0) {
            return
        }
        if(locY>=grid[locX].length ||locY<0) {
            return;
        }
        if(grid[locX][locY] === '0') {
            return;
        }
        grid[locX][locY] = '0';
        this.dfs(grid, locX-1, locY);
        this.dfs(grid, locX, locY-1);
        this.dfs(grid, locX+1, locY);
        this.dfs(grid, locX, locY+1);
    }

    numIslands(grid) {
        for(let i = 0;i<grid.length;i++) {
            for(let j = 0;j<grid[i].length;j++) {
                if(grid[i][j]==='1') {
                    this.count++;
                    this.dfs(grid, i, j)
                }
            }
        }
        return this.count;
    }
}
