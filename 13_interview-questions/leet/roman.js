let roman = 'DLIX'

// All regex expressions for roman numebers
const reOne = /I/g;
const reFour = /I(?=V)/;
const reFive = /V/;
const reNine = /I(?=X)/;
const reTen = /X/;
const reFourty = /X(?=L)/;
const reFifty = /L/;
const reNinety = /X(?=C)/;
const reHundert = /C/;
const reFrouhundert = /C(?=D)/;
const reFivehundert = /D/;
const reNinehundert = /C(?=M)/;
const reTousand = /M/;


const newString = roman.replace(reNine, 'HAHA')
console.log(newString);
