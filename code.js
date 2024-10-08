function depthFirstSearch(graph, startNode, targetNode) { // note that graph will be an adjacency list
    let visited = [] 
    let path = []
    
    function depthFirstHelp(node){
        if (visited.includes(node)) return false;
        if (node === targetNode) {
          path.push(node);
          return true;
        }
        
        visited.push(node);
        path.push(node);
        for(let i = 0; i < graph[node].length; i++){
            if(depthFirstHelp(graph[node][i]))
              return true;
        }
        
        path.pop(); // pop it because the target wasn't found on it's path
        return false;
    }
    
    depthFirstHelp(startNode);
    return path;
}

function breadthFirstSearch(graph, startNode, targetNode) { // note that graph will be an adjacency list
    let visited = [];
    let parent = {};
    let queue = [startNode];

    while (queue.length > 0) {
        let node = queue.shift();

        if (node === targetNode) {
            let path = [];
            let currentNode = targetNode;
            while (currentNode !== undefined) {
                path.unshift(currentNode);
                currentNode = parent[currentNode];
            }
            return path;
        }

        if (!visited.includes(node)) {
            visited.push(node);

            for (let i = 0; i < graph[node].length; i++) {
                const neighbor = graph[node][i];
                if (!visited.includes(neighbor) && !queue.includes(neighbor)) {
                    queue.push(neighbor);
                    parent[neighbor] = node;
                }
            }
        }
    }

    return [];
}
