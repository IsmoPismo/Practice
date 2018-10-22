function addNums(l1, l2) {
  let num1 = 0;
  let num2 = 0;
  let pot = 1;
  let node1 = l1.head;
  let node2 = l2.head;

  while(node1){
    num1 += pot * node1.data;
    num2 += pot * node2.data;
    pot *= 10
    node1 = node1.next;
    node2 = node2.next;
  }

  return num1 + num2
}

module.exports = addNums;
