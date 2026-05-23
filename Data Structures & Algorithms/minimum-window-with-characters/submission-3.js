class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tFrequency = new Map();
        const windowFreq = new Map();
        for(let i = 0; i<t.length;i++) {
            tFrequency.set(t[i], (tFrequency.get(t[i])||0) +1)
        }
        let start = 0, end = 0;
        let have = 0, need = t.length;
        let found = false

        let minLength = Infinity;
        let finalStart = -1;
        let finalEnd = -1
        for(let i=0;i < s.length; i++) {
            const char = s[i];
            windowFreq.set(char, (windowFreq.get(char)||0) + 1)

            const tcharFreq = tFrequency.get(char);
            const wcharFreq = windowFreq.get(char);
            if(tcharFreq !== undefined && tcharFreq >= wcharFreq) {
                have++;
                end = i;
            }
            while(have === need) {
                if(end-start <minLength) {
                    minLength = end-start;
                    finalStart = start;
                    finalEnd = end;
                }
                found = true;
                let schar = s[start];
                if(tFrequency.get(schar) !== undefined && tFrequency.get(schar)>= windowFreq.get(schar)) {
                    have--;
                }
                windowFreq.set(schar, windowFreq.get(schar) - 1)
                start++;
            }
        }
        if(found)
        return s.slice(finalStart, finalEnd+1)
        else return ""
    }
}
