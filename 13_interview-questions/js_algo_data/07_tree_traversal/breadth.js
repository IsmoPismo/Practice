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
    let node = new Node(val);
    let seek = this.root
    if (!this.root) return this.root = node

    // insert loop
    while(true){
      if (seek.val === val) return undefined
      if (node.val > seek.val && seek.right) seek = seek.right;
      else if (node.val > seek.val && !seek.right) return seek.right = node
      if (node.val < seek.val && seek.left) seek = seek.left;
      else if (node.val < seek.val && !seek.left) return seek.left = node
    }
  }

  breadth(){
    let queue = [this.root];
    let data = [];

    while(queue.length){
      let node = queue.shift();
      data.push(node.val)
      if (node.right) queue.push(node.right)
      if (node.left) queue.push(node.left)
    }
    return data
  }

  depthPreOrder(){
    let data = [];

    function traverse(node){
      data.push(node.val);
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)
    return data;
  }

  depthPostOrder(){
    let data = [];

    function traverse(node){
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.val);
    }

    traverse(this.root)
    return data;
  }
}

let tree = new BinarySearchTree();

tree.insert('I')
tree.insert('A')
tree.insert('B')
tree.insert('Z')
tree.insert('X')
tree.insert('a')
tree.insert('x')
tree.insert('j')
tree.insert('h')
console.log(tree.depthPreOrder())
console.log(tree.depthPostOrder())
