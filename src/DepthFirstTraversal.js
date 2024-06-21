function inOrderTraversal(node, callback, array){
    if (!node) return
    
    inOrderTraversal(node.left, callback, array)

    if (callback) callback(node)
    array.push(node.data)

    inOrderTraversal(node.right, callback, array)
    
    return array;
}

function postOrderTraversal(node, callback, array) {
    if (!node) return;

    postOrderTraversal(node.left, callback, array);
    postOrderTraversal(node.right, callback, array);

    if (callback) callback(node);
    array.push(node.data);
    return array;
}

function preOrderTraversal(node, callback, array) {
    if (!node) return;

    if (callback) callback(node);
    array.push(node.data);

    preOrderTraversal(node.left, callback, array);
    preOrderTraversal(node.right, callback, array);

    return array;
}

export {inOrderTraversal, postOrderTraversal, preOrderTraversal}