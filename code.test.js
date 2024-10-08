const fs = require('fs');
const jsc = require('jsverify');
eval(fs.readFileSync('code.js')+'');

// Running the DFS
const startNode = 0;
var targetNode = 7;


const graph = [
    [3, 4, 2, 7],
    [0],
    [1, 4],
    [2, 5, 6],
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




const testSearch1 = (depthFirstSearch(graph, startNode, targetNode) == [ 0, 7 ] )
jsc.assert(testSearch1);
if (depthFirstSearch(graph, startNode, targetNode) == [ 0, 7 ] ) {
  console.log('DFS Test successful');
} else {
  console.error(`DFS Fail, ${depthFirstSearch(graph, startNode, targetNode)} != [ 0, 7 ]$`); 
}

const testSearch2 = (depthFirstSearch(graph2, startNode, targetNode) == [ 0, 2, 4, 6, 7 ]) 
jsc.assert(testSearch2);
if (depthFirstSearch(graph2, startNode, targetNode) == [ 0, 2, 4, 6, 7 ]) {
  console.log('DFS Test successful');
}else{ 
  console.error((`DFS Fail, ${depthFirstSearch(graph2, startNode, targetNode)} != [ 0, 2, 4, 6, 7 ]$`));
}

const testSearch3 = (depthFirstSearch(graph3, startNode, targetNode) == [ 0, 1, 3, 7 ] )
jsc.assert(testSearch3);
if (depthFirstSearch(graph3, startNode, targetNode) == [ 0, 1, 3, 7 ] ) {
  console.log('DFS Test successful');
} else {
  console.error(`DFS Fail, ${depthFirstSearch(graph3, startNode, targetNode)} !=  [ 0, 1, 3, 7 ] $`); 
}


const testSearch4 = (breadthFirstSearch(graph, startNode, targetNode) == [ 0, 7 ] )
jsc.assert(testSearch4);
if (breadthFirstSearch(graph, startNode, targetNode) == [ 0, 7 ] ) {
  console.log('BFS Test successful');
} else {
  console.error(`BFS Fail, ${breadthFirstSearch(graph, startNode, targetNode)} != [ 0, 7 ]$`); 
}

const testSearch5 = (breadthFirstSearch(graph2, startNode, targetNode) == [ 0, 2, 4, 6, 7 ])
jsc.assert(testSearch5);
if (breadthFirstSearch(graph2, startNode, targetNode) == [ 0, 2, 4, 6, 7 ]) {
  console.log('BFS Test successful');
}else{ 
  console.error((`BFS Fail, ${breadthFirstSearch(graph2, startNode, targetNode)} != [ 0, 2, 4, 6, 7 ]$`));
}

const testSearch6 = (breadthFirstSearch(graph3, startNode, targetNode) == [ 0, 1, 3, 7 ] )
jsc.assert(testSearch6);
if (breadthFirstSearch(graph3, startNode, targetNode) == [ 0, 1, 3, 7 ] ) {
  console.log('BFS Test successful');
} else {
  console.error(`BFS Fail, ${breadthFirstSearch(graph3, startNode, targetNode)} !=  [ 0, 1, 3, 7 ] $`); 
}
