class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const visiting = new Set();
        const courseAdj = new Map();

        for(let i = 0; i <numCourses;i++) {
            courseAdj.set(i, []);
        }

        for(let i = 0; i <prerequisites.length;i++) {
            const curr = prerequisites[i];
            courseAdj.get(curr[0]).push(curr[1]);
        }

        const dfs = (course) => {
            if(visiting.has(course)) {
                return false;
            }
            if(courseAdj.get(course).length === 0) {
                return true;
            }
            visiting.add(course);
            const prereq = courseAdj.get(course)
            for(let i = 0;i < prereq.length;i++) {
                if(!dfs(prereq[i])) {
                    return false;
                }
            }
            visiting.delete(course);
            courseAdj.set(course,[])
            return true
        }

        for(let i = 0;i<numCourses;i++) {
            if(!dfs(i)) {
                return false;
            }
        }
        return true
    }
}
