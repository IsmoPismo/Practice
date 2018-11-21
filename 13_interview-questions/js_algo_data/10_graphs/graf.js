class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }

    removeVertex(vertex){
      for(let v of this.adjacencyList[vertex]){
        this.removeEdge(v, vertex)
      }

      delete this.adjacencyList[vertex]
    }

    addEdge(v1, v2){
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2){
      let adj1 = this.adjacencyList[v1]
      let adj2 = this.adjacencyList[v2]
      adj1 = adj1.splice(adj1.indexOf(v2), 1);
      adj2 = adj2.splice(adj2.indexOf(v1), 1);
    }
}

let g = new Graph()
g.addVertex('B')
g.addVertex('S')
g.addVertex('Z')
g.addVertex('LJ')
g.addEdge('B', 'S')
g.addEdge('B', 'Z')
g.addEdge('B', 'LJ')
g.addEdge('Z', 'LJ')
g.addEdge('S', 'Z')
g.removeVertex('S')
console.log(g);
