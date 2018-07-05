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

  // Clears the List
  clear(){
    this.head = null;
  }

  // Removes the first node
  removeFirst(){
    this.head = this.head.next || null
  }

  // Removes the last node
  removeLast(){
    // Checks for list of length 0 and 1...
    if (!this.head) {return}
    if (this.head.next === null){
      this.head = null;
      return
    }

    // ... Loops through other cases
    let prev = this.head;
    let curr = this.head.next;
    while(curr.next !== null){
      prev = curr
      curr = curr.next
    }
    prev.next = null
  }

  // Inserts a node at end
  insertLast(data){
    if (this.head === null) {return}
    this.getLast().next = new Node(data);
  }

  // Gets a node at n-th index
  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  // removeAt(index){
  //   if(!this.head){
  //     return
  //   }
  //
  //   if(index === 0){
  //     this.head = this.head.next
  //     return
  //   }
  //
  //   const previous = this.getAt(index - 1);
  //   previous.next = previous.next.next;
  // }
}

module.exports = { Node, LinkedList };
