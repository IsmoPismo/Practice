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
}

let list = new LinkedList();
list.insertFirst(5)
list.insertFirst(8)
list.insertFirst(12)
list.insertFirst('fucker')
console.log(list);
console.log(list.size());
console.log(list.getAt(2));
console.log(list.getFromLast(2));
