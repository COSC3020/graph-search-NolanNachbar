# Search in Graphs

Recall the pseudocode for Depth-First Search:

Given a graph, a start node, and a node we're looking for:
- starting at the start node, while unvisited nodes remain
    - if current vertex $v$ is the node we're looking for, return it
    - mark $v$ as visited
    - for each edge $(v,w)$
        - recursively process $w$ unless marked visited

Implement the algorithm. You can choose any of the data structures we covered
(adjacency matrix or adjacency list) for the implementation. Your function
should return the list of nodes on the path from the start to the target (not
the list of nodes that you looked at during the search). If start and target are
the same, it should return a list with only that node. If there is no path from
the start to the target, it should return an empty list. Start with the template
I provided in `code.js` and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

Recall my code,
```js
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
```
The worst case would be when the target is the last node it checks or when the node isn't there; in either of those cases, it checks every edge of every node. It will check each node's edges a maximum of one time before it gets put into the visited array. Thus, the worst case $\Theta$ complexity is $\Theta(V + E)$. 

I looked at this to help me figure out how to go about doing it. I basically used it to create the outline of my code.
https://github.com/COSC3020/graph-search-ZachRenz/pull/1/files

I also used this website to help me understand how it works:
https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/

I started by copying the test code and workflow from the binary search problem in other to configure the test environment. 
When I was creating the the test file I wasn't sure how to go about doing it. I looked at another repo and used it to create an outline. I thought I had sent that repo to myself but I can't find it now.  


## Bonus

Implement and analyze breadth-first search.



I've created this code and added it to my code and testing files.
```js
function breadthFirstSearch(graph, startNode, targetNode) { // note that graph will be an adjacency list
    let visited = [] 
    let path = []
    let queue = [startNode]

    while (queue.length > 0){
      let node = queue.shift();
      
      if (node === targetNode) {
        path.push(node);
        break;
      }
      
      if (!visited.includes(node)){
        visited.push(node);
        path.push(node); 
        
        for (let i = 0; i < graph[node].length; i++) 
          queue.push(graph[node][i]);
      }
      
    }
    
    return path;
}
```

Similar to before, the worst case would be when the target is the last node it checks or when the node isn't there; in either of those cases, it checks every edge of every node. Thus, the worst case $\Theta$ complexity is $\Theta(V + E)$. 

When I was creating this I started with my code from the DFS and modified it. I used the slides and this to help me conceptualize it. 
https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/#

I used this website to help with the syntax to compare arrays in js.
https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
