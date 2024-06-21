export default function getDepth(root, node, depth = 0) {
    if (root === node)
        return depth;
    
    if (node.data < root.data) {
        depth += 1
        return getDepth(root.left, node, depth)
    } else {
        depth += 1
        return getDepth(root.right, node, depth)
    }
    
}