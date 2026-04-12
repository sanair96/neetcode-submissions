class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const adj = Array.from({ length: n }, () => []);;
        for(let i=0;i<edges.length;i++) {
            const [start, end] = edges[i];
            adj[start].push(end);
            adj[end].push(start);
        }
    
        const visited = {}
        const dfs = (node, parent) => {
            if(visited[node]) {
                return false;
            }
            visited[node] = true;
            for(let adjNode of adj[node]) {
                if(adjNode === parent) {
                    continue;
                }

                if(!dfs(adjNode, node)) {
                    return false;
                }
            }
            return true;
        }
        return dfs(0, -1) && Object.keys(visited).length === n
    }
}
