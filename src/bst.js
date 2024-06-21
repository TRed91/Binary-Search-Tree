import prettyPrint from "./prettyPrint";
import insertRec from "./insertRec";
import mergeSort from "./mergeSort";
import recursiveBuild from "./buildTree";
import deleteIt from "./delete";
import findRecursive from "./findRec";
import levelOrderRec from "./levelOrderRec";
import {inOrderTraversal, postOrderTraversal, preOrderTraversal} from "./DepthFirstTraversal";
import getHeight from "./getHeight";
import getDepth from "./getDepth";

export class Node {
    constructor(data) {
        this.data = data;
    }
    left = null;
    right = null;
}

class Tree {
    constructor(arr) {
        this.root = buildTree(arr);
    }

    insert(value) {;
        insertRec(this.root, value);
    }

    deleteItem(value) {
        deleteIt(this.root, value);
    }

    find(value) {
        return findRecursive(this.root, value);
    }
    levelOrder(callback) {
        let node = this.root;
        if (!node) {return null}
        let queue = [node];
        let array = [];
        /* array = levelOrderRec(node, callback, array, queue)
        return array */
        
        while(queue.length > 0) {

            let current = queue[0];
            array.push(current.data)
            if (callback) 
                callback(current)

            if (current.left)
                queue.push(current.left);
            if (current.right)
                queue.push(current.right);

            queue.shift();
        }
        if (!callback) return array;
    }

    inOrder(callback) {
        let node = this.root;
        if (!node) {return null}
        let array = [];
        array = inOrderTraversal(node, callback, array)
        return array;
    }

    postOrder(callback) {
        let node = this.root;
        if (!node) {return null}
        let array = [];
        array = postOrderTraversal(node, callback, array)
        return array;
    }

    preOrder(callback) {
        let node = this.root;
        if (!node) {return null}
        let array = [];
        array = preOrderTraversal(node, callback, array)
        return array;
    }

    height(node) {
        let getNode = this.find(node)
        let getheight = getHeight(getNode);
        return getheight;
    }

    depth(node) {
        let getNode = this.find(node);
        return getDepth(this.root, getNode);
    }

    isBalanced() {
        let heightLeft = getHeight(this.root.left);
        let heightRight = getHeight(this.root.right);
        if (heightLeft > heightRight + 1 || heightRight > heightLeft + 1){
            return false;
        } else {
            return true;
        }
    }

    rebalance() {
        this.root = buildTree(this.inOrder());
    }
}

const buildTree = (array) => {
    let sortedArr = mergeSort(array);
    let tree = recursiveBuild(sortedArr);
    return tree;
}

let tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])

tree.insert(204)
tree.insert(504)
tree.insert(151)
tree.insert(1604)
prettyPrint(tree.root)
console.log(tree.isBalanced())
tree.rebalance()
prettyPrint(tree.root)
console.log(tree.isBalanced())