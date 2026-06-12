class TrieNode {
    constructor() {
        this.endOfWord = false;
        this.child = new Map();
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let cur = this.root;

        for(let i = 0; i< word.length;i++) {
            if(!cur.child.get(word[i])) {
                cur.child.set(word[i], new TrieNode())
            }
            cur = cur.child.get(word[i]);
        }
        cur.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let cur = this.root;
        for(let i = 0; i<word.length;i++) {
            if(!cur.child.get(word[i])) {
                return false;
            }
            cur = cur.child.get(word[i]);
        }
        return cur.endOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let cur = this.root;
        for(let i = 0; i<prefix.length;i++) {
            if(!cur.child.get(prefix[i])) {
                return false;
            }
            cur = cur.child.get(prefix[i]);
        }
        return true
    }
}
