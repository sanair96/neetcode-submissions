/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        const maxDia = {val: 0}
        const dfs = (node, dia) => {
            if(!node) {
                return 0; 
            }
            const leftTree = dfs(node.left, dia);
            const rightTree = dfs(node.right, dia);
            dia.val = Math.max(leftTree + rightTree, dia.val);
            return 1 + Math.max(leftTree, rightTree)
        }

        dfs(root, maxDia)

        return maxDia.val
    }
}
