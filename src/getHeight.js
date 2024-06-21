export default function getHeight(node, height = 0) {
    if (!node) return 0;
    if (!node.left && !node.right) return height = 0;
    
    let heightLeft = getHeight(node.left, height +1); 
    let heightRight = getHeight(node.right, height +1); 
    
    if (heightLeft > heightRight)
        height = heightLeft+1;
    else
        height = heightRight+1;

    return height;
}