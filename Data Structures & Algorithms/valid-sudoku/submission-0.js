class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const ROWS = board.length;
        const COLS = board[0].length
        const row = {}
        const col = {};
        const square = {};

        for(let i =0;i<9;i++) {
            row[i] = {};
            col[i] = {};
            square[i] = {}
        }
        for(let i = 0;i<ROWS;i++) {
            for(let j = 0;j<COLS;j++) {
                if(board[i][j]!='.') {
                    if(row[i][board[i][j]]) {
                        return false;
                    } else {
                        row[i][board[i][j]] = true;  
                    }
                    
                    if(col[j][board[i][j]]) {
                        return false;
                    } else {
                        col[j][board[i][j]] = true;
                    }
                    const squareLoc = Math.floor(i/3)*3+Math.floor(j/3);
                    if(square[squareLoc][board[i][j]]) {
                        return false;
                    } else {
                        square[squareLoc][board[i][j]] = true;
                    }
                }
            }
        }

        return true;
    }
}
