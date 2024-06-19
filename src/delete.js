export default function deleteIt(root, value, prev = null) {
    
    while (value !== root.data) {
        if (value < root.data) {
            prev = root;
            root = root.left;
        }
        if (value > root.data) {
            prev = root;
            root = root.right;
        }
    }

    if (root.left === null && root.right === null) {
        if (root.data < prev.data)
            return prev.left = null;
        else
            return prev.right = null; 
    }

    if (root.right === null) {
        if (root.data < prev.data)
            return prev.left = root.left;
        else
            return prev.right = root.left;
    }

    if (root.left === null) {
        if (root.data < prev.data)
            return prev.left = root.right;
        else
            return prev.right = root.right;
    }

    let replace = findNextBiggest(root.right, root)

    root.data = replace;
}

function findNextBiggest(root, prev) {

    if (root.left === null) {
        let store = root.data

        if (root.data < prev.data)
            prev.left = root.right;
        else
            prev.right = root.right;

        return store;
    }
    return findNextBiggest(root.left, root)
}