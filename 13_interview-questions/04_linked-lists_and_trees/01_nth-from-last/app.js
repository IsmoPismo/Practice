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

  insertFirst(data){
    this.head = new Node(data, this.head);
  }

  size(){
    let counter = 0;
    let node = this.head;
    while(node){
      counter++;
      node = node.next;
    }
    return counter
  }

  getAt(index){
    let counter = 0;
    let node = this.head;

    while(node){
      if(counter === index){
        return node
      }
      counter++
      node = node.next;
    }
    return null
  }

  getFromLast(fromLastIndex){
    let index = this.size() - fromLastIndex;
    return this.getAt(index)
  }

  getFromLastTwo(index){
    let slow = this.head;
    let fast = this.head;
    for (let step = 0; step < index; step++){
      fast = fast.next;
    }
    while(!fast === null){
      slow = slow.next;
      fast = fast.next;
    }
    return slow
  }
}

let list = new LinkedList();
list.insertFirst(5)
list.insertFirst(8)
list.insertFirst(12)
list.insertFirst('fucker')
// console.log(list);
// console.log(list.size());
// console.log(list.getAt(2));
console.log(list.getFromLastTwo(0));
