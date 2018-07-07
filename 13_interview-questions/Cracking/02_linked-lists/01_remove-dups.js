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

function removeDups(head){
  let slow = head;
  let fast = slow.next
  while(slow.next !== null){
    fast = slow.next
    while(fast.next !== null){
      console.log(slow.data, fast.data);
      if(slow.data === fast.data){
        fast.next = fast.next.next
        fast = fast.next
      } else {
        fast = fast.next
      }
    }
    slow = slow.next
  }
}

removeDups(nodeA)
// console.log(nodeA);
