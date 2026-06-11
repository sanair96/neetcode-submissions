class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const seen = {n};
        while(n!=1) {
            if(seen[n]) {
                break;
            }
            seen[n] = true
            let t = n;
            let sum = 0
            while(t!=0) {
                const num = t%10;
                sum += (num*num);
                t=Math.floor(t/10);
            }
            n=sum;
        }
        return n===1;
    }
}
