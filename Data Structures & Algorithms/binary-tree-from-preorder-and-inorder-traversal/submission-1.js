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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let preIdx = 0;
        const indices = new Map();

        inorder.forEach((val, i) => indices.set(val, i));

        const dfs =(l, r) => {
            if(l>r) {
                return null;
            }

            const root_val = preorder[preIdx];
            const mid = indices.get(root_val);

            const root = new TreeNode(root_val);
            preIdx++;
            root.left = dfs(l, mid-1);
            root.right = dfs(mid+1,r);
            return root;
        }
        return dfs(0, inorder.length-1)
    }
}
