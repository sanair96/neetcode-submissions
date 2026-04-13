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

    findMaxDepth = (node) => {
            if(node === null) {
                return 0;
            }
            let right = this.findMaxDepth(node.right);
            let left = this.findMaxDepth(node.left);
            return Math.max(right,left) + 1;
        }

    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        if(!root) {
            return true
        }
        const right = this.findMaxDepth(root.right);
        const left =  this.findMaxDepth(root.left);
        if (Math.abs(left - right) > 1) return false;
        return this.isBalanced(root.left) && this.isBalanced(root.right)
    }
}
