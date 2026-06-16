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
    maxPathSum(root) {
        const res = [root.val];
        const dfs = (root) => {
            if(root === null) {
                return 0;
            }

            const leftSum = Math.max(dfs(root.left),0);
            const rightSum = Math.max(dfs(root.right),0);
            res[0] = Math.max(res[0], root.val+leftSum+rightSum);
            return root.val + Math.max(leftSum, rightSum)
        }
        dfs(root);
        return res[0];
    }
}
