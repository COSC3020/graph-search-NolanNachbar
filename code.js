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

const graph = [
    [3, 4, 2, 7],
    [0],
    [1, 4],
    [2, 3, 6],
    [1, 5],
    [6],
    [],
    [8],
    [],
    []
];

const graph2 = [
    [1, 2],
    [3],
    [3, 4],
    [],
    [5, 6],
    [],
    [7],
    [],
    [],
    []
];

const graph3 = [
    [1],
    [2, 3],
    [4],
    [7],
    [5],
    [],
    [8],
    []
];

const startNode = 0;
var targetNode = 7;

function testSearch(theAdjList){
  const findPath = depthFirstSearch(graph, startNode, targetNode);
  
  if (findPath.length === 0 ){console.log("Zero");}
  else if (findPath[findPath.length - 1] == targetNode)
    console.log(`Test successful, Path from node ${startNode} to node ${targetNode}:`, findPath)
  else if (findPath[findPath.length - 1] !== targetNode)
    console.error(`Fail, no path found`);
}

testSearch(graph)
testSearch(graph2)
testSearch(graph3)
