function depthFirstSearch(graph, startNode, targetNode) { // note that graph will be an adjacency list
    let visited = [] 
    
    function depthFirstHelp(node){
        if (visited.includes(node)) return false;
        if (node === targetNode) return true;
        
        visited.push(node);
        for(let i = 0; i < graph[node].length; i++){
            if(!visited.includes(grap[node][i]))
            depthFirstHelp(graph[node][i]);
        }
        console.log(visited)
        visited.pop(); // pop it because the target wasn;t found on it's path
        return visited;
    }
    
    let returnPath = depthFirstHelp(graph, startNode, targetNode);
    return returnPath;
}

// Example graph
const graph3 = [
    [2, 3, 6],
    [3],
    [0],
    [0, 1, 7],
    [],
    [],
    [0],
    [8, 3],
    [7]
];

// Running the DFS
const startNode = 0;
const targetNode = 7;
const path = depthFirstSearch(graph3, startNode, targetNode);

console.log(`Path from node ${startNode} to node ${targetNode}:`, path);
