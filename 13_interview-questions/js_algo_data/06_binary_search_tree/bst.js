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

  find(val){
    if (!this.root) return false
    let node = this.root,
        found = false;
    while (node){
      if (node.val === val) return true
      if (val < node.val){
        node = node.left;
      } else {
        node = node.right
      }
    }
  }
}

let tree = new BinarySearchTree()
tree.insert(20)
tree.insert(21)
tree.insert(22)
tree.insert(19)
tree.insert(18)
tree.insert(5)
tree.insert(25)
tree.insert(28)
tree.insert(30)
tree.insert(10)
tree.insert(0)
console.log(tree.find(22))
