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

  extractMax(){
    // Swap first and last value | pops the last (max)
    [this.arr[0], this.arr[this.arr.length - 1]] = [this.arr[this.arr.length - 1], this.arr[0]];
    const max = this.arr.pop();
    let i = 0;

    while(true){
      // calculating the left and right children
      let l = 2 * i + 1,
          r = 2 * i + 2;

      // Main logic
      if (this.arr[i] < this.arr[l] && this.arr[l] > this.arr[r]){
        [this.arr[i], this.arr[l]] = [this.arr[l], this.arr[i]]
        i = l;
        continue;
      } else if (this.arr[i] < this.arr[r] && this.arr[r] > this.arr[l]){
        [this.arr[i], this.arr[r]] = [this.arr[r], this.arr[i]]
        i = r;
        continue;
      } else break
    }

    return [max, this.arr]
  }
}

let heap = new MaxBinaryHeap();
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
