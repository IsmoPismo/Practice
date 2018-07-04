"use strict";

const VOWELS = "aeiouy"

function translate(phrase){
   let result = '';
   let re = /(?![EIOUY])[B-Z]/
   for (let i = 0; i < phrase.length; i++){
     if (phrase[i] === ' '){
       result += ' '
     } else if((re.test(phrase[i].toUpperCase()))){
       result += phrase[i];
       i++
     }
     else {
       result += phrase[i];
       i+=2
     }
   }
   return result
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(translate("hieeelalaooo"), "hello", "Hi!");
    assert.equal(translate("hoooowe yyyooouuu duoooiiine"), "how you doin", "Joey?");
    assert.equal(translate("aaa bo cy da eee fe"), "a b c d e f", "Alphabet");
    assert.equal(translate("sooooso aaaaaaaaa"), "sos aaa", "Mayday, mayday");

    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
