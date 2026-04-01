class MinStack {
    constructor() {
        this.min = [];
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const currMin = this.min[this.min.length - 1];
        if (this.min.length === 0 || val < currMin) {
            this.min.push(val);
        } else {
            this.min.push(currMin);
        }
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.min.pop();
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
       return this.stack[this.stack.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length-1];
    }
}
