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
}

let list = new DoublyLinkedList();
list.push(99)
list.push(100)
console.log(list);
