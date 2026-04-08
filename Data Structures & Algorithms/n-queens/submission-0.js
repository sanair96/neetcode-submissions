class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const board = Array.from({length: n}, ()=>new Array(n).fill('.'));
        const solutions = [];
        this.backtrack(0, board, {}, {}, {}, {}, n, solutions)
        return solutions;
    }

    deepCopy(board) {
        const newBoard = Array.from({length: board.length}, ()=>new Array(board[0].length).fill('.'));
        for(let i= 0;i<board.length;i++) {
            for(let j=0; j<board[i].length;j++) {
                newBoard[i][j] = board[i][j]
            }
        }
        return newBoard.map(row => row.join(""))
    }

    backtrack(i, board, x, y, pd, nd, leftQ, selected) {
        if(leftQ === 0) {
            selected.push(this.deepCopy(board));
            return;
        }
        for(let j = 0;j<board[i].length;j++) {
            if(x[i]!=true && y[j] != true && pd[i+j] != true && nd[i-j] !=true) {
                board[i][j] = 'Q';
                x[i] = true;
                y[j] = true;
                pd[i+j] = true;
                nd[i-j] = true;
                this.backtrack(i+1, board, x, y, pd, nd, leftQ-1, selected);
                board[i][j] = '.';
                x[i] = false;
                y[j] = false;
                pd[i+j] = false;
                nd[i-j] = false;
            }
        }
    }
}
