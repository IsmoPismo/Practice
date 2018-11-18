class MaxBinaryHeap {
  constructor(){
    this.arr = [100,90,80,50,30,10]
  }

  insert(val){
    this.arr.push(val);

    const bubleUp = arr => {
      let i = arr.length - 1
      let p = Math.floor((i - 1)/2)

      while(arr[i] > arr[p]){
        [arr[i], arr[p]] = [arr[p], arr[i]]
        i = p
        p = Math.floor((i - 1)/2)
      }

      return this.arr
    }

    return bubleUp(this.arr)
  }
}

let heap = new MaxBinaryHeap();
console.log(heap.insert(500))
console.log(heap.insert(400));
