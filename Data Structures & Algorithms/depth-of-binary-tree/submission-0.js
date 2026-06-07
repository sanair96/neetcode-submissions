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
    maxDepth(root) {
        const dfs = (node, level) => {
            if(node===null) {
                return level;
            }
            const lDepth =  dfs(node.left, level+1);
            const rDepth =  dfs(node.right, level+1);

            return Math.max(lDepth, rDepth)

        }
        return dfs(root, 0);
    }
}
