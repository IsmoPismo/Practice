let re;
let h1 = document.querySelector('h1');
re = /hello/;
re = /hello/i; // i - case insensitive
// re = /hello/g; // g - global search


// h1.innerText = `re: ${re}`;
// h1.innerText += `\nre.source: ${re.source}`;


// exec() - result in array or null
// const result = re.exec('hello world');

// console.log(result);
// h1.innerText += `\nresult: ${result}`;
// h1.innerText += `\nresult[0]: ${result[0]}`;
// h1.innerText += `\nresult.input: ${result.input}`;
// h1.innerText += `\nresult.index: ${result.index}`;


// test() - true of false
// const result = re.test('heelllooo world');
//
// h1.innerText += result;


// match() - result array or null
// const str = 'Hello';
// const result = str.match(re);
// console.log(result);


// search() - index of the first match or -1
// const str = 'yo hello';
// const result = str.search(re);
// h1.innerText = result;


// replace() - new string with some or all matches of a pattern
const str = 'Hello My Friend';
const newStr = str.replace(re, 'Good to see you');
h1.innerText = newStr;
