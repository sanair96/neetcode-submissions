class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const visiting = new Set();
        const visited = new Set();
        const courseAdj = new Map();
        const visitOrder = [];
        for(let i = 0;i<numCourses;i++) {
            courseAdj.set(i, []);
        }

        for(let i = 0; i<prerequisites.length;i++) {
            const curr = prerequisites[i]
            courseAdj.get(curr[0]).push(curr[1]);
        }

        const dfs = (course) => {
            if(visiting.has(course)) {
                return false;
            }

            if(visited.has(course)) {
                return true;
            }

            visiting.add(course);

            const prereq = courseAdj.get(course);

            for(let i = 0; i < prereq.length;i++) {
                if(!dfs(prereq[i])) {
                    return false;
                }
            }
            visiting.delete(course);
            courseAdj.set(course,[]);
            visited.add(course)
            visitOrder.push(course);

            return true;
        }

        for(let i = 0;i<numCourses;i++) {
            if(!dfs(i)) {
                return []
            }
        }
        return visitOrder;
    }
}
