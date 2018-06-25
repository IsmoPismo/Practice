let re;

re = /\w/;

// String to match
const str = `Dude, Hello World 42`;

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
