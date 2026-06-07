/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let lca = null;
        const dfs = (node)=> {
            if(node===null || lca ) {
                return [false, false]
            }
            const left = dfs(node.left);
            const right = dfs(node.right);
            
            const foundP = left[0] || right [0] || p == node;
            const foundQ = left[1] || right [1] || q == node;
           
            if(foundP && foundQ && !lca) {
                lca = node;
            }
            return [foundP, foundQ];
        }
        dfs(root)
        return lca
    }
}
