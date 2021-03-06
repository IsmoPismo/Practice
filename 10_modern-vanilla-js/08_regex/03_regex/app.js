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

// Brackets
re = /gr[ae]y/; // must be a or e
re = /[GF]ray/; // must be G or f
re = /[^GF]ray/; // must NOT be G or f
re = /[a-z]ray/; // match any lowercase letter
re = /[A-Z]ray/; // match any uppercase letter
re = /[A-Za-z]ray/; // match any letter
re = /[0-9]ray/; // match any letter

// Braces
re = /Hel{2}o/; // must occur {n} times
re = /Hel{2,4}o/; // must occur {n-m} times
re = /Hel{2,}o/; // must occur at least {n} times

// Parantheses
re = /^([0-9]x){3}$/;

// Shorthand
re = /\w/; // word char - alpha or num
re = /\w+/; // one or more
re = /\W/; // Non-word char
re = /\d/; // digit
re = /\d+/; // one or more
re = /\D/; // Non-digit
re = /\s/; // space or tab
re = /\S/; // No space or tab
re = /Hell\b/;

// Assertions
re = /x(?=y)/; // x followed by y
re = /x(?!y)/; // not x followed by y

const str = 'Hello, welcome to Hell';
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
