import { Node } from "./bst";

export default function insertRec(root, value) {
    
    if (value === root.data)
        return;

    if (value < root.data) {
        if (root.left === null) 
            return root.left = new Node(value);
        else 
            insertRec(root.left, value);
        
    }
    if (value > root.data) {
        if (root.right === null) 
            return root.right = new Node(value);
        else 
            insertRec(root.right, value);
    }
}