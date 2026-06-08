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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        const dfs = (node, sum) => {
            if(node === null) {
                return false;
            }
            if(node.left === null && node.right === null) {
                return (sum+node.val) === targetSum
            }
            const left = dfs(node.left, sum+node.val)
            const right = dfs(node.right, sum+node.val)
            return left || right
        }
        return dfs(root, 0)
    }
}
