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


test('Test depthFirstSearch function', () => {
 expect(depthFirstSearch(graph, startNode, targetNode)).toEqual([ 0, 7 ]); 
 expect(depthFirstSearch(graph2, startNode, targetNode)).toEqual([ 0, 2, 4, 6, 7 ]); 
 expect(depthFirstSearch(graph3, startNode, targetNode)).toEqual( [ 0, 1, 3, 7 ]); 
});

test('Test breadthFirstSearch function', () => {
 expect(breadthFirstSearch(graph, startNode, targetNode)).toEqual([ 0, 7 ]); 
 expect(breadthFirstSearch(graph2, startNode, targetNode)).toEqual([ 0, 2, 4, 6, 7 ]); 
 expect(breadthFirstSearch(graph3, startNode, targetNode)).toEqual( [ 0, 1, 3, 7 ]); 
});

BFStestSearch(graph)
BFStestSearch(graph2)
BFStestSearch(graph3)
