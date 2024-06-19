export default function mergeSort(arr) { //with duplicate removal
    if (arr.length === 1){return arr}
    if (arr.length === 2) {
        if (arr[0] < arr[1])
            return arr;
        else
            return [arr[1], arr[0]];
    }

    let left = arr.toSpliced(Math.floor(arr.length / 2), arr.length - 1);
    let right = arr.toSpliced(0, Math.floor(arr.length / 2));
    
    
    let leftSorted = mergeSort(left);
    let rightSorted = mergeSort(right);
    
    let newArray = [];

    while (leftSorted.length > 0 && rightSorted.length > 0) {
        if (leftSorted[0] === rightSorted[0]) {
            newArray.push(leftSorted.shift());
            rightSorted.shift();
        }
        else if (leftSorted[0] < rightSorted[0]) 
            newArray.push(leftSorted.shift());
        else
            newArray.push(rightSorted.shift());
        
    }

    if (leftSorted.length > 0) {
        leftSorted.forEach(e => newArray.push(e));
    }
    if (rightSorted.length > 0)
        rightSorted.forEach(e => newArray.push(e));

    return newArray;
}