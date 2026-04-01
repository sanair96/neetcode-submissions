class Solution {

    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        const map = {
            "(":")",
            "{":"}",
            "[":"]"
        }
        let i=0;
        if(s.length === 1) {
            return false;
        }
        for(; i<s.length;i++) {
            if(s[i]=="(" || s[i]=="{"  || s[i]=="[" ) {
                stack.push(s[i]);
            }
            if(s[i]==")" || s[i]=="}"  || s[i]=="]" ) {
                const lastParen = stack[stack.length-1];              
                if(s[i] === map[lastParen]) {
                    stack.pop()
                } else {
                    return false
                }
            }
        }
        return stack.length === 0 && !(i<s.length);
    }
}
