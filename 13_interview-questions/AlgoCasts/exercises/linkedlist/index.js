// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  // Inserts a element as the first node
  insertFirst(data){
    this.head = new Node(data, this.head);
  }

  // Returns the number of nodes
  size(){
    // Initialize counter and first node
    let counter = 0;
    let node = this.head;

    // Loops through list while there are nodes to count
    while (node){
      counter++;
      node = node.next;
    }
    return counter
  }

  // Returns the first node
  getFirst(){
    return this.head;
  }

  // Returns the last node
  getLast(){
    let node = this.head;
    while(node){
      if(node.next === null){
        return node
      }
      node = node.next
    }
  }
}

module.exports = { Node, LinkedList };
