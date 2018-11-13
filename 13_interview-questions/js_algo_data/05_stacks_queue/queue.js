class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val){
    let newNode = new Node(val)
    if (!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue(){
    if (!this.first) return null
    let temp = this.first
    if(this.first === this.last) {
      this.first = null
      return temp.val
    }
    this.first = this.first.next
    this.size--;
    return temp.val
  }
}

let q = new Queue()
q.enqueue('this')
q.enqueue('is')
q.enqueue('a')
q.enqueue('que')
console.log(q);
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
