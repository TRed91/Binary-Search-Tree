export default function findRecursive(root, value) {
    
    if (root.data === value)
        return root;
    
    if (root.data !== value && root.left === null && root.right === null)
        return null;
    
    if (value < root.data)
        return findRecursive(root.left, value)
    else
        return findRecursive(root.right, value)
}