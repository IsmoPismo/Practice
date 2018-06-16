let re;
re = /hello/;
re = /hello/i;

// Metachars
re = /^h/i; // Starts with
re = /d$/i; // Ends with
re = /^hello world$/i; // Starts + Ends with
re = /h.llo/i; // Matches anyONE char
re = /h*llo/i; // Matches zero or more char
re = /hellou?/i; // Optional char
re = /hello\?/i; // Escape char


const str = 'Hello World';
const result = re.exec(str);

console.log(result);

function reTest(re, str) {
  if(re.test(str)){
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);
