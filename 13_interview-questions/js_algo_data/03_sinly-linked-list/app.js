class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    let node = new Node(val)
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop(){
    if (this.head === null) return undefined
    else if (this.head.next === null) {
      let node = this.head
      this.head = null;
      return node
    } else if (this.head.next === this.tail){
      let node = this.head.next
      this.head.next = null;
      return node
    }

    let prev = this.head;
    let node = this.head.next;

    while(node.next !== null) {
      prev = prev.next
      node = node.next
    }

    prev.next = null;
    this.tail = prev;
    this.length--;
    return node;
  }
}

let list = new SinglyLinkedList();
list.push('Jebo')
list.push('te')
list.push('otac')
list.push('očin')
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
