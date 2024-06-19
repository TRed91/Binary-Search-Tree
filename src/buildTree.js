import { Node } from "./bst";

export default function recursiveBuild(arr, isLeft = true) {
    if (arr.length === 0)
        return null;

    if (arr.length === 1)
        return new Node(arr[0])

    if (arr.length == 2) {
        if (isLeft){
            let root = new Node(arr[1])
            root.left = new Node(arr[0]);
            return root;
        } else {
            let root = new Node(arr[0])
            root.right = new Node(arr[1]);
            return root;
        }
    }

    let mid = Math.floor((arr.length -1) / 2);

    let root = new Node(arr[mid]);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid + 1);

    root.left = recursiveBuild(leftArr, true);
    root.right = recursiveBuild(rightArr, false);

    return root;
}
