class Solution {

    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanString = "";
        let i = 0;
        while(i<s.length) {
            if(this.isAlphanumeric(s[i])) {
                cleanString+=s[i].toLowerCase();
            }
            i++;
        }

        let start = 0;
        let end = cleanString.length-1;

        while(start<=end) {
            if(cleanString[start]!==cleanString[end]) {
                break;
            }
            start++;
            end--;
        }

        return !(start<end)
    }
}
