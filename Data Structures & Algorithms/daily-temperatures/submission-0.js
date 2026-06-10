class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const tempStack = [];
        const tempDistance = new Array(temperatures.length).fill(0)
        for(let i = 0;i<temperatures.length;i++) {
            if(tempStack.length === 0) {
                tempStack.push(i);
            } else {

            while(temperatures[tempStack[tempStack.length-1]] < temperatures[i]) {
                const top = tempStack.pop();
                tempDistance[top] = i-top;
            }

            tempStack.push(i);
            }
        }
        return tempDistance
    }
}
