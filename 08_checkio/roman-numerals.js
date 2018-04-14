"use strict";

function romanNumerals(number) {
    if (!+number)
        return false;
    var digits = String(+number).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(romanNumerals(6), 'VI', "First");
    assert.equal(romanNumerals(76), 'LXXVI', "Second");
    assert.equal(romanNumerals(499), 'CDXCIX', "Third");
    assert.equal(romanNumerals(3888), 'MMMDCCCLXXXVIII', "Forth");
    console.log("Done! Go Check!");
}
