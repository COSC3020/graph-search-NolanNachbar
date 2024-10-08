const fs = require('fs');
const jsc = require('jsverify');
eval(fs.readFileSync('code.js')+'');

// Running tests
const startNode = 0;
const targetNode = 7;
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


function arraysEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}
const testSearch1 = depthFirstSearch(graph, startNode, targetNode);
if (arraysEqual(testSearch1, [0, 7])) {
  console.log('DFS Test 1 successful');
} else {
  console.error(`DFS Test 1 Fail, ${testSearch1} != [ 0, 7 ]`); 
}

const testSearch2 = depthFirstSearch(graph2, startNode, targetNode);
if (arraysEqual(testSearch2, [0, 2, 4, 6, 7])) {
  console.log('DFS Test 2 successful');
} else {
  console.error(`DFS Test 2 Fail, ${testSearch2} != [ 0, 2, 4, 6, 7 ]`); 
}

const testSearch3 = depthFirstSearch(graph3, startNode, targetNode);
if (arraysEqual(testSearch3, [0, 1, 3, 7])) {
  console.log('DFS Test 3 successful');
} else {
  console.error(`DFS Test 3 Fail, ${testSearch3} != [ 0, 1, 3, 7 ]`); 
}

const testSearch4 = breadthFirstSearch(graph, startNode, targetNode);
if (arraysEqual(testSearch4, [0, 7])) {
  console.log('BFS Test 4 successful');
} else {
  console.error(`BFS Test 4 Fail, ${testSearch4} != [ 0, 7 ]`); 
}

const testSearch5 = breadthFirstSearch(graph2, startNode, targetNode);
if (arraysEqual(testSearch5, [0, 2, 4, 6, 7])) {
  console.log('BFS Test 5 successful');
} else {
  console.error(`BFS Test 5 Fail, ${testSearch5} != [ 0, 2, 4, 6, 7 ]`); 
}

const testSearch6 = breadthFirstSearch(graph3, startNode, targetNode);
if (arraysEqual(testSearch6, [0, 1, 3, 7])) {
  console.log('BFS Test 6 successful');
} else {
  console.error(`BFS Test 6 Fail, ${testSearch6} != [ 0, 1, 3, 7 ]`); 
}
