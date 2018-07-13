function integerLass(x) {
    let lowerBound = Math.pow(-2, 31)
    let upperBound = Math.pow(2, 31) - 1
    let result = (Math.sign(x) * parseInt(x.toString().split('').reverse().join('')))

    return result > upperBound ? 0 : result;
};

console.log(integerLass(1534236469))
