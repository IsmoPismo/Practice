const minMoves2 = nums => {
    let count = 0;
    if (nums.length === 1) return count
    let center = nums.reduce( (n, m) => (n + m) / 2)
    for (let i of nums){
        count += center - i
    }
    return count
};

console.log(minMoves2([2,5]));
