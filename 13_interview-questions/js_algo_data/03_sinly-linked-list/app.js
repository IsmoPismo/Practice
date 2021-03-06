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
    return this;
  }

  get(n){
    if (n < 0 || n >= this.length) return null
    let node = this.head;
    for (let i = 0; i < n; i++){
      node = node.next;
    }
    return node
  }

  set(val, n){
    let node = this.get(n);
    if(!node) return false
    node.val = val;
    return true
  }

  insert(val, n){
    if (n < 0 || n > this.length) return false
    if (n === this.length) return this.push(val) == this
    if (n === 0) return this.unshift(val) == this

    let node = new Node(val);
    let prev = this.get(n - 1);
    node.next = prev.next;
    prev.next = node;
    this.length++;
    return true
  }

  remove(n){
    if (n < 0 || n >= this.length) return undefined
    if (n === this.length - 1) return this.pop()
    if (n === 0) return this.shift()

    let node = this.get(n - 1);
    let removedNode = node.next
    node.next = node.next.next;
    this.length--;
    return removedNode;
  }

  reverse(){
    [this.head, this.tail] = [this.tail, this.head]
    let next;
    let prev = null;
    let node = this.tail;

    for (let i = 0; i < this.length; i++){
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this
  }

  print(){
      var arr = [];
      var current = this.head
      while(current){
          arr.push(current.val)
          current = current.next
      }
      console.log(arr);
  }
}

let list = new SinglyLinkedList();
list.push('Jebo')
list.push('te')
list.push('otac')
list.push('očin')
list.print();
list.reverse();
list.print();
