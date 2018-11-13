class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
      let node = new Node(val)
      if (this.length === 0){
        this.head = node;
        this.tail = node;
      } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      }
      this.length++;
      return this;
    }

    pop(){
      if(!this.head) return undefined
      let poppedNode = this.tail
      if(this.legnth === 0){
        this.head = null;
        this.tail = null;
      } else {
        this.tail = poppedNode.prev;
        this.tail.next = null;
        poppedNode.prev = null;
      }
      this.length--;
      return poppedNode
    }

    shift(){
      if(!this.head) return undefined;
      let oldHead = this.head;
      if(this.legnth === 0){
        this.head = null;
        this.tail = null;
      } else {
        this.head = oldHead.next;
        this.head.prev = null;
        oldHead.next = null;
      }
      this.length--;
      return oldHead;
    }

    unshift(val){
      let node = new Node(val);
      if (!this.head){
        this.head = node
        this.tail = node
      } else {
        node.next = this.head;
        this.head.prev = node;
        node = this.head
      }
      this.length++;
      return this;
    }

    get(n){
      if(n < 0 || n >= this.length) return null;
      if(n < this.length/2){
        var node = this.head;
        for (let i = 0; i < n; i++){
          node = node.next
        }
      } else {
        var node = this.tail;
        for (let i = this.legnth - 1; i > this.length - n; i--){
          node = node.prev
        }
      }
      return node;
    }
}

let list = new DoublyLinkedList();
list.push(99)
list.push(100)
list.push(101)
list.push(102)
list.push(103)
list.unshift(90)
