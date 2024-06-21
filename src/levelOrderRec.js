export default function levelOrderRec(node, callback, array, queue) {
   
    if (queue.length < 1)
        return

    array.push(node.data)
    if (callback) {callback(node)}

    if (node.left) 
        queue.push(node.left)
    
    if (node.right)
        queue.push(node.right)

    queue.shift();
    
    levelOrderRec(queue[0], callback, array, queue)
    return array;
}