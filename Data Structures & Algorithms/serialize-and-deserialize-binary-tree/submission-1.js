// Definition for a binary tree node.
// class TreeNode {
//  constructor(val = 0, left = null, right = null) {
//  this.val = val;
//          this.left = left;
//          this.right = right;
//      }
//  }


class Codec {

      dfsSerialize(node, res) {
        if(!node) {
            res.push("N")
            return
        }
        res.push(node.val.toString());
        this.dfsSerialize(node.left, res);
        this.dfsSerialize(node.right, res);
    }
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const res = []
        this.dfsSerialize(root,res)

        return res.join(",");
    }

  

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const serData = data.split(",");
        const i = {val:0}
        return this.dfsDeSerialize(serData, i);
    }

    dfsDeSerialize(vals,i) {
        if(vals[i.val] === "N") {
            i.val++;
            return null;
        }
        const node = new TreeNode(parseInt(vals[i.val]));
        i.val++;
        node.left = this.dfsDeSerialize(vals, i);
        node.right = this.dfsDeSerialize(vals, i);
        return node;
    }
}
