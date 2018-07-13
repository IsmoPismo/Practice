class Node{
  constructor(data, next = null){
    this.data = data;
    this.next = next
  }
}

class LinkedList{
  constructor(values = []){
    this.head = null
    values = values.reverse()

    for(let value of values){
      this.insertFirst(value)
    }
  }

  insertFirst(value){
    this.head = new Node(value, this.head)
  }
}

const list = new LinkedList(['S', 'I', 'M', 'P', 'L', 'E'])
console.log(list);
