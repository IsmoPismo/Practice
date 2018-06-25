let re;
// Literals
re = /hello/;
re = /hello/i;

// Meta
re = /^h/i; // Must start with
re = /world$/i; // Must end with
re = /^hello world$/i; // Must start and end with
re = /^hell. world$/i; // Matches any ONE
re = /hell*/i; // Matches any char 0 or more time
re = /hello?u?/i; // Optional


// String to match
const str = `Dude, Hello World`;

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str){
  if(re.test(str))
    console.log(`${str} matches ${re.source}`);
  else
    console.log(`${str} does NOT match ${re.source}`);
}

reTest(re, str);
