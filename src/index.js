import { Tree } from "./bst";
import prettyPrint from "./prettyPrint";

let tree = new Tree(generateRandomArray());

function generateRandomArray() {
    let array = [];
    for (let i = 0; i < 20; i++) {
        let num = Math.floor(Math.random()*100);
        array.push(num);
    }
    return array;
}

console.log("===== Starting Binary Search Tree =====")
prettyPrint(tree.root)
console.log("is balanced? " + tree.isBalanced());
console.log("level order: " + tree.levelOrder());
console.log("in order: " + tree.inOrder());
console.log("post order: " + tree.postOrder());
console.log("pre order: " + tree.preOrder());
console.log("");
tree.insert(204)
tree.insert(504)
tree.insert(151)
tree.insert(1604)
console.log("===== Tree after insertions =====")
prettyPrint(tree.root)
console.log("is balanced? " + tree.isBalanced());
tree.rebalance();
console.log("");
console.log("===== Rebalanced Tree =====")
prettyPrint(tree.root)
console.log("is balanced? " + tree.isBalanced());
console.log("level order: " + tree.levelOrder());
console.log("in order: " + tree.inOrder());
console.log("post order: " + tree.postOrder());
console.log("pre order: " + tree.preOrder());
