import prettyPrint from "./prettyPrint";
import insertRec from "./insertRec";
import mergeSort from "./mergeSort";
import recursiveBuild from "./buildTree";
import deleteIt from "./delete";

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
}

const buildTree = (array) => {
    let sortedArr = mergeSort(array);
    let tree = recursiveBuild(sortedArr);
    return tree;
}

let tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])

tree.insert(6);
tree.insert(12);
tree.insert(321);
tree.insert(66);
tree.insert(45);
tree.insert(11);
prettyPrint(tree.root)
tree.deleteItem(8);
prettyPrint(tree.root)