class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let length = arr.length;
        let prev = -1;
        for(let i = length-1;i>=0;i--) {
            let temp = arr[i];
            arr[i] = prev;
            if(temp>prev) {
                prev=temp;
            }
        }
        return arr;
    }
}
