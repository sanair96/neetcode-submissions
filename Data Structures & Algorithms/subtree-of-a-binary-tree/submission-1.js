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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */

    checkTreeDfs(node, subNode) {
        if(!node && !subNode) {
            return true;
        }
        if(!node || !subNode) {
            return false;
        }
        if(node.val === subNode.val) {
            return this.checkTreeDfs(node.left, subNode.left) && this.checkTreeDfs(node.right, subNode.right)
        }
        return false;
    }

    isSubtree(root, subRoot) {
        if(!subRoot) {
            return true;
        }
        if(!root) {
            return false;
        }

        if(this.checkTreeDfs(root, subRoot)) {
            return true;
        }

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }  
}
