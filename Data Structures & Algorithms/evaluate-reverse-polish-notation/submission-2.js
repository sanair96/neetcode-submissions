class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const evalStack = [];
        while(tokens.length>0) {
            const char = tokens.shift();
            const isNumber = !isNaN(char);

            if(isNumber) evalStack.push(parseInt(char));
            else {
                const num1 = evalStack.pop();
                const num2 = evalStack.pop();
                switch(char){
                    case "+":
                        evalStack.push(num2+num1);
                        break;
                    case "-":
                        evalStack.push(num2-num1);
                        break;
                    case "*":
                        evalStack.push(num2*num1);
                        break;
                    case "/":
                        evalStack.push(Math.trunc(num2/num1))
                }
            }
        }
        return evalStack.pop()
    }
}
