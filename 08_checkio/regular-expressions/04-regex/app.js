let re;

re = /\w/; // Word char - alphanum or _
re = /\w+/; // + one or more
re = /\W/; // NON
re = /\d/; // Digit char
re = /\d+/; // Digit char
re = /\D/; // NON
re = /\D+/; // NON until ('Dude, Hello Wolrd ')
re = /\s/; // White space
re = /\S/; // NON White space
re = /\S+/; // NON until ('Dude,')
re = /Hell\b/i; // Word boundary

// Assertions
re /x(?=y)/; // X followed by Y
re /x(?!y)/; // X not followed by Y


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
