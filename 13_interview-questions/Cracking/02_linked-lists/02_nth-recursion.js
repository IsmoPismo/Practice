class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const nodeA = new Node(5)
const nodeB = new Node(9)
const nodeC = new Node(8)
const nodeD = new Node(9)

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = null;

function kthToLast(head, index){
  if(head === null){
    return 0
  }
  let k = kthToLast(head.next, index) + 1
  if(k === index){
    console.log(`${index}${index > 2 ? "th" : index === 1 ? "st" : "nd"} to the last is ${head.data}`);
  }
  return k
}


kthToLast(nodeA, 3)
