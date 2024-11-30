function depthFirstSearch(graph, startNode, targetNode) { // note that graph will be an adjacency list
    let visited = [startNode] 
    
    function depthFirstHelp(graph, node, targetNode){
        if (node == targetNode) return visited;
        
        for(let i = 0; i < graph[node].length; i++){
            
            depthFirstHelp(graph, node, targetNode);
        }
        
    }
    let returnPath = depthFirstHelp(graph, startNode, targetNode);
    return returnPath;
}
