const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

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

// Running the DFS
const startNode = 0;
var targetNode = 7;

function DFStestSearch(theAdjList){
  const findPath = depthFirstSearch(theAdjList, startNode, targetNode);
  
  if (findPath.length === 0 ){console.log("Zero");}
  else if (findPath[findPath.length - 1] == targetNode)
    console.log(`DFS Test successful, Path from node ${startNode} to node ${targetNode}:`, findPath)
  else if (findPath[findPath.length - 1] !== targetNode)
    console.error(`DFS Fail, no path found`);
}

DFStestSearch(graph)
DFStestSearch(graph2)
DFStestSearch(graph3)

function BFStestSearch(theAdjList){
  const findPath = breadthFirstSearch(theAdjList, startNode, targetNode);
  
  if (findPath.length === 0 ){console.log("Zero");}
  else if (findPath[findPath.length - 1] == targetNode)
    console.log(`BFS Test successful, Path from node ${startNode} to node ${targetNode}:`, findPath)
  else if (findPath[findPath.length - 1] !== targetNode)
    console.error(`BFS Fail, no path found`);
}

BFStestSearch(graph)
BFStestSearch(graph2)
BFStestSearch(graph3)
