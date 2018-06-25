let re;

// Brackets [] - Sets
re = /Hell[ou]/i;
re = /[HB]ello/;
re = /[HB]ello/; // Anything but
re = /[A-Z]ello/; // Range uppercase
re = /[a-z]ello/; // Range lowercase
re = /[a-zA-Z]ello/; // Range any letter
re = /[0-9]ello/; // Range any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // {n} - amount of times
re = /Hel{2,4}o/i; // {n-m} - range of times
re = /Hel{2,}o/i; // at least {n,}

// Parantheses () - Grouping
re = /([0-9]x){3}/;

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
