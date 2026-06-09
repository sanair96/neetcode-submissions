class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const arr = [];
        for(let i = 0;i<strs.length;i++) {
            arr.push(`${strs[i].length}#${strs[i]}`)
        };
        return arr.join('');
    }
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let finalStrings = [];
        let pointer = 0;

        while(pointer<str.length) {
            let size = 0;
            while(str[pointer]!='#') {
                size = size*10+ parseInt(str[pointer]);
                pointer++;
            }
            pointer++;
            if(size===0) {
                finalStrings.push("")
            } else {
                const extractedString = str.slice(pointer, pointer+size);
                finalStrings.push(extractedString);
                pointer = pointer+size;
            }
        }

        return finalStrings

    }
}
