// function depthFirstSearch(graph, startNode, targetNode) {
//     return [];
// }


// Testing my test code file setup
function binarySearch(list, element) {
    let left = 0;
    let right = list.length - 1; 

    while (left <= right) {
        // Calculate middle index
        let middle = Math.floor((left + right) / 2); 

        // Compare middle element with the target element. I also added the while loop to give the index of the first appearance of the target element
        if (list[middle] === element) {
            while(list[middle] === element){
                middle--;
            }
            return middle + 1; 
        } else if (list[middle] < element) {
            left = middle + 1; 
        } else {
            right = middle -1; 
        }
    }
    return -1;
}
