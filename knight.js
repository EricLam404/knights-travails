const visited = new Map();

let row = [2, 2, -2, -2, 1, 1, -1, -1];
let col = [-1, 1, 1, -1, 2, -2, 2, -2];

class Node{
    constructor(x, y, dist = 0){
        this.x = x;
        this.y = y;
        this.dist = dist;
    }
}

function findShortestDistance(length, curr, dest){
    let queue = [];
    queue.push(curr);
    while(queue.length != 0){
        let node = queue.shift();
        if(node.x == dest.x && node.y == dest.y){
            return node.dist;
        }
        else if(!visited.get(coords(node))){
            visited.set(coords(node), true);

            for(let i = 0; i < 8; i++){
                if(isValid(length, node.x + row[i], node.y + col[i])){
                    queue.push(new Node(node.x + row[i], node.y + col[i], node.dist + 1));
                }
            }
        }

    
    }

    return -1;
}

function isValid(length, x, y){
    return (x >= 0 && x < length) && (y >= 0 && y < length);
}

function coords(node){
    let x = node.x.toString();
    let y = node.y.toString();
    return x + y;
}

/*
Use breadth-first search

Look for non-visited nodes/squares around it
Use hashmap to see if its visited/not visited; 

1. Create an empty queue and enqueue the soruce cell having a 
distance of 0 from the source(itself)
(done)

2. Loop till queue is empty:
    i. Dequeue next unvisited node
    (done)
    
    ii. If the popped node is the destination node, return its 
    distance 
    (done)
    
    iii. 
    Otherwise we mark the current node as visited. 
    (done)

    For each of eight possible movmeent for a knight, 
    enqueue each valid movement with a +1 distance 

    (minimum distance of a given node from a given node 
    from the source is one more than the minimum
    distance of parent from source)
*/

let start = new Node(3, 3);
let dest = new Node(4, 3);

console.log(findShortestDistance(8, start, dest))
