/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const visited = {};
        const clone = (copyNode, vis) => {
            if(copyNode === null) {
                return null;
            }

            if(visited[copyNode.val]) {
                return vis[copyNode.val];
            }
            if(copyNode.neighbors.length === 0) {
                const newNode = new Node(copyNode.val, [])
                vis[copyNode.val] = newNode;
                return newNode;
            }

            const newNode = new Node(copyNode.val);
            vis[copyNode.val] = newNode;
            newNode.neighbors = copyNode.neighbors.map(adjNode => clone(adjNode, vis))
            return newNode;
        }
        return clone(node, visited);
    }
}
