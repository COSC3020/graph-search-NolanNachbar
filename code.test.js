const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');


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

// Test cases
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

// Running the DFS
const startNode = 0;
var targetNode = 7;

function testSearch(theAdjList){
  const findPath = depthFirstSearch(theAdjList, startNode, targetNode);
  
  if (findPath.length === 0 ){console.log("Zero");}
  else if (findPath[findPath.length - 1] == targetNode)
    console.log(`Test successful, Path from node ${startNode} to node ${targetNode}:`, findPath)
  else if (findPath[findPath.length - 1] !== targetNode)
    console.error(`Fail, no path found`);
}

testSearch(graph)
testSearch(graph2)
testSearch(graph3)
