class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const nodeA = new Node(1)
const nodeB = new Node(2)
const nodeC = new Node(3)
const nodeD = new Node(4)
const nodeE = new Node(5)

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;
nodeE.next = null;

function findMid(head){
  let slow = head;
  let fast = head.next;
  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next
  }
  return slow.data
}

console.log(findMid(nodeA));
