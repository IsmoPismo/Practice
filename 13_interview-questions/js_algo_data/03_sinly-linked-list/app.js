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
    if (!this.head) return undefined

    let current = this.head;
    let newTail = current;

    while(current.next) {
      newTail = current;
      current = current.next
    }

    this.tail = newTail;
    newTail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift(){
     if (!this.head) return undefined
     let oldHead = this.head;
     this.head = this.head.next;
     this.length--;
     return oldHead;
  }

  unshift(val){
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }

    this.length++;
  }
}

let list = new SinglyLinkedList();
list.push('Jebo')
list.push('te')
list.push('otac')
list.push('očin')
