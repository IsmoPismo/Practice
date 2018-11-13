class Node {
  constructor(val){
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(val){
    let node = new Node(val)

    if (!this.root) return this.root = node

    let seek = this.root
    while (true){
      if (val === seek.val) return undefined
      if (node.val > seek.val){
        if (!seek.right){
          seek.right = node;
          return this
        }
        seek = seek.right
      } else {
        if (!seek.left){
          seek.left = node;
          return this
        }
        seek = seek.left
      }
    }
  }
}
