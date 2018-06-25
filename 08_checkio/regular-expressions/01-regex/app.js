let re;
re = /hello/i; // i - case insensitive
// re = /hello/g; // i - global search

// console.log(re);
// console.log(re.source);

// exec() - result in an array or null
// const resultExec = re.exec('hello world')
// console.log(resultExec);
// console.log(resultExec[0]); // return 're' exec
// console.log(resultExec.index);
// console.log(resultExec.input);

// test() - true or false
// const result = re.test('Hello');
// console.log(result);

// match() - result array or null
// const str = 'Hello there';
// oposite to string:
// const resultMatch = str.match(re);
// console.log(resultMatch);
// console.log(resultMatch[0]); // returns 'str' match
// console.log(resultMatch.index);
// console.log(resultMatch.input);

// search() - returns index of first match or -1
// const str = ' Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - returns a new string with some or all matches
// const str = 'Hello There';
// const newStr = str.replace(re, 'Go Home');
// console.log(newStr);
