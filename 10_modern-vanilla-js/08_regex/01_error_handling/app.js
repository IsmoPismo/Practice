const user = {email: 'jdoe@gmail.com'}

try {
  // Reference Error
  // myFunction()

  // TypeError
  // null.myFunction();

  // SyntaxError
  // eval('hello world');

  // URIError
  // decodeURIComponent('%');

  if(!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }

} catch(e){
  console.log(`User Error: ${e.massage}`);
  // console.log(e);
  // console.log(e.message);
  // console.log(e.name)
  // console.log(e instanceof TypeError); // => False
} finally {
  console.log('Finally runs regardless of result');
}

console.log(`Program Continues`);

const body = document.body;
body.style.backgroundColor = "black";
body.style.color = "white";
