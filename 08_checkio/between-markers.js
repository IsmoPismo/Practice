"use strict";

function betweenMarkers(text, begin, end) {
    let beg = text.indexOf(begin);
    let en = text.indexOf(end);
    return text.slice(beg === -1 ? 0 : beg + begin.length, en === -1 ? text.length : en);
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple')

    assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple')
    assert.equal(betweenMarkers("<head><title>My new site</title></head>",
                                "<title>", "</title>"), 'My new site')
    assert.equal(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No')
    assert.equal(betweenMarkers('No [b]hi', '[b]', '[/b]'), 'hi')
    assert.equal(betweenMarkers('No hi', '[b]', '[/b]'), 'No hi')
    assert.equal(betweenMarkers('No <hi>', '>', '<'), '')
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
