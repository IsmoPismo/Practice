class Node{
  constructor(data, next=null){
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

  getNthFromLast(index){
    let node = this.head;
    let seek = this.head;

    for(let i = 0; i < index; i++){
      if(seek.next){
        seek = seek.next
      } else {
        return `The given input: ${index} is larger than the linked list`
      }
    }

    while(seek.next !== null){
      node = node.next;
      seek = seek.next;
    }
    return node.data
  }
}

const list = new LinkedList()
list.insertFirst('Six');
list.insertFirst('Five');
list.insertFirst('Four');
list.insertFirst('Three');
list.insertFirst('Two');
list.insertFirst('One');

console.log(list.getNthFromLast(3));
